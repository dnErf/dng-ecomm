import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
// ---
import { ideliveryMethod } from 'src/app/common/interfaces/idelivery';
import { BasketService } from 'src/app/core/services/basket.service';
import { CheckoutService } from 'src/app/core/services/checkout.service';

@Component({
  selector: 'checkout-delivery',
  templateUrl: './delivery.component.html'
})
export class DeliveryComponent implements OnInit {

  @Input() checkoutForm:FormGroup

  deliveryMethods:ideliveryMethod[]

  constructor (private servBasket:BasketService, private servCheckout:CheckoutService) { }

  ngOnInit() {
    this.servCheckout.getDeliveryMethods()
      .subscribe(
        (dm:ideliveryMethod[]) => {
          this.deliveryMethods = dm;
        }, error => {
          console.log(error);
        }
      );
  }

  setShippingPrice(deliveryMethod:ideliveryMethod) {
    this.servBasket.setShippingPrice(deliveryMethod);
  }

}
