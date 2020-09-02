import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
// ---
import { ibasketTotals } from 'src/app/common/interfaces/ibasket';
import { BasketService } from 'src/app/core/services/basket.service';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'basket-checkout',
  templateUrl: './checkout.page.html'
})
export class CheckoutPage implements OnInit {

  checkoutForm:FormGroup;
  $basketTotal:Observable<ibasketTotals>;

  constructor (
    private servAccount:AccountService, 
    private servBasket:BasketService,
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.createCheckoutForm();
    this.getAddressFormValues();
    this.getDeliveryMethodValue();
    this.$basketTotal = this.servBasket.$basketTotal;
  }

  createCheckoutForm() {
    this.checkoutForm = this.fb.group({
      addressForm: this.fb.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        street: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        zipcode: [null, Validators.required],
      }),
      deliveryForm: this.fb.group({
        deliveryMethod: [null, Validators.required]
      }),
      paymentForm: this.fb.group({
        nameOnCard: [null, Validators.required]
      })
    });
  }

  getAddressFormValues() {
    this.servAccount.userAddressFetch()
      .subscribe(
        (address) => {
          if (address) {
            this.checkoutForm.get('addressForm').patchValue(address);
          }
        }, 
        (err) => {
          console.log(err);
        }
      );
  }

  getDeliveryMethodValue() {
    let basket = this.servBasket.getCurrentBasketValue();
    
    if (basket.deliveryMethodId !== null) {
      this.checkoutForm
        .get('deliveryForm')
        .get('deliveryMethod')
        .patchValue(basket.deliveryMethodId.toString());
    }
  }

}
