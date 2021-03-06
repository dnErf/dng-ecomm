import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// ---
import { BasketService } from 'src/app/core/services/basket.service';
import { ibasket, ibasketItem, ibasketTotals } from 'src/app/common/interfaces/ibasket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html'
})
export class BasketPage implements OnInit {

  $basket:Observable<ibasket>;
  $basketTotal:Observable<ibasketTotals>;

  constructor (private servBasket:BasketService) { }

  ngOnInit() {
    this.$basket = this.servBasket.$basket;
    this.$basketTotal = this.servBasket.$basketTotal;
  }

  decrementQuantity(item:ibasketItem) {
    this.servBasket.decrementItemQuantity(item);
  }

  incrementQuantity(item:ibasketItem) {
    this.servBasket.incrementItemQuantity(item);
  }

  removeBasketItem(item:ibasketItem) {
    this.servBasket.removeItemFromBasket(item);
  }

}
