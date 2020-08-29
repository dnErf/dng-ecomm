import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
// ---
import { AccountService } from 'src/app/core/services/account.service'

@Component({
  selector: 'basket-checkout',
  templateUrl: './checkout.page.html'
})
export class CheckoutPage implements OnInit {

  checkoutForm:FormGroup

  constructor (private servAccount:AccountService, private fb:FormBuilder) { }

  ngOnInit() {
    this.createCheckoutForm();
    this.getAddressFormValues();
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

}
