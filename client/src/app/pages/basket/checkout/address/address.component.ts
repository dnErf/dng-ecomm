import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
// ---
import { AccountService } from 'src/app/core/services/account.service'

@Component({
  selector: 'checkout-address',
  templateUrl: './address.component.html'
})
export class AddressComponent implements OnInit {

  @Input() checkoutForm:FormGroup

  constructor (private accountService:AccountService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  saveUserAddress() {
    // this.accountService.updateUserAddress(this.checkoutForm.get('addressForm').value)
    //   .subscribe(() => {
    //     this.toastr.success('Address saved');
    //   }, error => {
    //     this.toastr.error(error.message);
    //     console.log(error);
    //   });
  }

}
