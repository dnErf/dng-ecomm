import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
// ---
import { BasketService } from 'src/app/core/services/basket.service'
import { ibasket, ibasketItem } from 'src/app/common/interfaces/ibasket';

@Component({
  selector: 'basket-summary',
  templateUrl: './basket-summary.component.html'
})
export class BasketSummaryComponent implements OnInit {

  $basket:Observable<ibasket>;

  @Output() decrement:EventEmitter<ibasketItem> = new EventEmitter<ibasketItem>();
  @Output() increment:EventEmitter<ibasketItem> = new EventEmitter<ibasketItem>();
  @Output() remove:EventEmitter<ibasketItem> = new EventEmitter<ibasketItem>();

  @Input() isBasket = true;

  constructor (private servBasket:BasketService) { }

  ngOnInit() {
    this.$basket = this.servBasket.$basket;
  }

  decrementQuantity(item:ibasketItem) {
    
    this.decrement.emit(item);
  }

  incrementQuantity(item:ibasketItem) {
    
    this.increment.emit(item);
  }

  removeBasketItem(item:ibasketItem) {
    
    this.remove.emit(item);
  }

}