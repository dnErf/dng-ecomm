import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
// ---
import { AccountService } from 'src/app/core/services/account.service'

@Component({
  selector: 'checkout-success',
  templateUrl: './success.component.html'
})
export class SuccessComponent implements OnInit {

  checkoutForm:FormGroup

  constructor (private accountService:AccountService) { }

  ngOnInit() {
  }

}
