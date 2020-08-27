import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
// ---
import { AccountService } from 'src/app/core/services/account.service'

@Component({
  selector: 'checkout-payment',
  templateUrl: './payment.component.html'
})
export class PaymentComponent implements OnInit {

  checkoutForm:FormGroup

  constructor (private accountService:AccountService) { }

  ngOnInit() {
  }

}
