import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// ---
import { BasketService } from 'src/app/core/services/basket.service'
import { ibasket, ibasketItem } from 'src/app/common/interfaces/ibasket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html'
})
export class BasketPage implements OnInit {

  $basket:Observable<ibasket>;

  constructor (private servBasket:BasketService) { }

  ngOnInit() {
    this.$basket = this.servBasket.$basket;
  }

  decrementQuantity(item:ibasketItem) {
    console.log('decrement');
    this.servBasket.decrementItemQuantity(item);
  }

  incrementQuantity(item:ibasketItem) {
    console.log('increment');
    this.servBasket.incrementItemQuantity(item);
  }

  removeBasketItem(item:ibasketItem) {
    console.log('remove');
    this.servBasket.removeItemFromBasket(item);
  }

}
