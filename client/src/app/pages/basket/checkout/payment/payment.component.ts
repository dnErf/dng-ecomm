import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
// ----
import { iorder } from 'src/app/common/interfaces/iorder';
import { ibasket } from 'src/app/common/interfaces/ibasket';
import { BasketService } from 'src/app/core/services/basket.service';
import { CheckoutService } from 'src/app/core/services/checkout.service';

@Component({
  selector: 'checkout-payment',
  templateUrl: './payment.component.html'
})
export class PaymentComponent {

  @Input() checkoutForm:FormGroup

  constructor (
    private servBasket:BasketService,
    private servCheckout:CheckoutService,
    private router:Router,
    private toastr:ToastrService,
  ) { }

  submitOrder() {
    let basket = this.servBasket.getCurrentBasketValue();
    let orderToCreate = this.getOrderToCreate(basket);
    
    this.servCheckout.createOrder(orderToCreate)
      .subscribe(
        (order:iorder) => {
          this.toastr.success('Order created successfully');
          this.servBasket.deleteLocalBasket(basket.id);
          // const navigationExtras:NavigationExtras = { state: order };
          this.router.navigate(['checkout/success'], { state: order });
        }, 
        (err) => {
          this.toastr.error(err.message);
          console.log(err);
        }
      );
  }

  private getOrderToCreate(basket:ibasket) {
    return {
      basketId: basket.id,
      deliveryMethodId: +this.checkoutForm.get('deliveryForm').get('deliveryMethod').value,
      shipToAddress: this.checkoutForm.get('addressForm').value
    };
  }

}
