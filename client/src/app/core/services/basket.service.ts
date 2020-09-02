import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
// ---
import { environment as env } from 'src/environments/environment';
import { Basket } from 'src/app/common/class/Basket';
import { ibasket, ibasketItem, ibasketTotals } from 'src/app/common/interfaces/ibasket';
import { ideliveryMethod } from 'src/app/common/interfaces/idelivery';
import { iproduct } from 'src/app/common/interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private basketSrc = new BehaviorSubject<ibasket>(null);
  private basketTotalSrc = new BehaviorSubject<ibasketTotals>(null);

  $basket = this.basketSrc.asObservable();
  $basketTotal = this.basketTotalSrc.asObservable();

  shipping = 0;

  constructor(private http:HttpClient) { }

  addItemToBasket(item:iproduct, quantity = 1) {
    let itemToAdd:ibasketItem = {
      id: item.id,
      productName: item.name,
      price: item.price,
      pictureUrl: item.pictureUrl,
      brand: item.productBrand,
      category: item.productCategory,
      quantity
    }
    let basket = this.getCurrentBasketValue() ?? new Basket();

    // if (basket === null) // using angular 8 below
    // { basket = new Basket(); localStorage.setItem('basket_id', basket.id); }

    localStorage.setItem('basket_id', basket.id);
    basket.items = this.addOrUpdateItem(basket.items, itemToAdd, quantity);
    this.setBasket(basket);
  }

  createPaymentIntent() {
    return this.http.post(`${env.baseUrl}/payments/${this.getCurrentBasketValue().id}`, {})
      .pipe(
        map((basket:ibasket) => {
          this.basketSrc.next(basket)
        })
      )
  }

  decrementItemQuantity(item:ibasketItem) {
    let basket = this.getCurrentBasketValue();
    let foundItemIndex = basket.items.findIndex((a) => a.id === item.id);
    if (basket.items[foundItemIndex].quantity > 1) {
      basket.items[foundItemIndex].quantity -= 1;
      this.setBasket(basket);
    }
    else {
      this.removeItemFromBasket(item);
    }
  }

  deleteLocalBasket(id: string) {
    this.basketSrc.next(null);
    this.basketTotalSrc.next(null);
    localStorage.removeItem('basket_id');
  }

  deleteBasket(basket:ibasket) {
    return this.http.delete(`${env.baseUrl}/basket?id=${basket.id}`).subscribe(
      () => {
        this.basketSrc.next(null);
        this.basketTotalSrc.next(null);
        localStorage.removeItem('basket_id');
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getCurrentBasketValue() {
    return this.basketSrc.value;
  }

  getBasket(id:string) {
    return this.http.get(`${env.baseUrl}/basket?id=${id}`)
      .pipe(
        map((basket:ibasket) => {
          this.basketSrc.next(basket);
          this.shipping = basket.shippingPrice;
          this.calculateTotals();
        })
      );
  }

  incrementItemQuantity(item:ibasketItem) {
    let basket = this.getCurrentBasketValue();
    let foundItemIndex = basket.items.findIndex((a) => a.id === item.id);
    basket.items[foundItemIndex].quantity += 1;
    this.setBasket(basket);
  }

  removeItemFromBasket(item:ibasketItem) {
    let basket = this.getCurrentBasketValue();
    if (basket.items.some(x => x.id === item.id)) {
      basket.items = basket.items.filter((a) => a.id !== item.id);
      if (basket.items.length > 0) {
        this.setBasket(basket);
      }
      else {
        this.deleteBasket(basket);
      }
    }
  }

  setBasket(basket:ibasket) {
    return this.http.post(`${env.baseUrl}/basket`, basket)
      .subscribe(
        (res:ibasket) => {
          this.basketSrc.next(res);
          this.calculateTotals();
        },
        (err) => {
          console.log(err);
        }
      )
  }

  setShippingPrice(deliveryMethod:ideliveryMethod) {
    let basket = this.getCurrentBasketValue();
    basket.deliveryMethodId = deliveryMethod.id;
    basket.shippingPrice = deliveryMethod.price;

    this.shipping = deliveryMethod.price;
    this.calculateTotals();
    this.setBasket(basket);
  }

  private addOrUpdateItem(items:ibasketItem[], itemToAdd:ibasketItem, quantity:number):ibasketItem[] {
    let index = items.findIndex((i) => i.id === itemToAdd.id);
    if (index === -1) {
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    }
    else {
      items[index].quantity += quantity;
    }
    return items;
  }

  private calculateTotals() {
    let basket = this.getCurrentBasketValue();
    let shipping = this.shipping;
    let subtotal = basket.items.reduce((a, b) => (b.price * b.quantity) + a, 0);
    let total = subtotal + shipping;
    this.basketTotalSrc.next({ shipping, total, subtotal });
  }

}
