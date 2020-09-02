import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CdkStepper } from '@angular/cdk/stepper';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
// ---
import { ibasket } from 'src/app/common/interfaces/ibasket';
import { BasketService } from 'src/app/core/services/basket.service'

@Component({
  selector: 'checkout-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {

  @Input() checkoutStepper:CdkStepper;

  $basket:Observable<ibasket>;

  constructor (private servBasket:BasketService, private toastr:ToastrService) { }

  ngOnInit() {
    this.$basket = this.servBasket.$basket;
  }

  createPaymentIntent() {
    return this.servBasket.createPaymentIntent()
      .subscribe(
        (res) => {
          this.checkoutStepper.next();
        },
        (err) => {
          this.toastr.error(err.message);
        }
      )
  }

}
