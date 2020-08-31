import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
// import { BasketService } from 'src/app/core/services/basket.service'
import { ibasketTotals } from 'src/app/common/interfaces/ibasket';

@Component({
  selector: 'basket-total',
  templateUrl: './basket-total.component.html'
})
export class BasketTotalComponent {

  @Input() shippingPrice:number;
  @Input() subtotal:number;
  @Input() total:number;

  constructor() {
  }

}