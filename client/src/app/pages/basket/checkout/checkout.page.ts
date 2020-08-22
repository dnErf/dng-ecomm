import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// ---
import { BasketService } from 'src/app/core/services/basket.service'
import { ibasket, ibasketItem } from 'src/app/common/interfaces/ibasket';

@Component({
  selector: 'basket-checkout',
  templateUrl: './checkout.page.html'
})
export class CheckoutPage implements OnInit {

  constructor (private servBasket:BasketService) { }

  ngOnInit() {
  }

}
