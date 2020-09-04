import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
// ---
import { AccountService } from 'src/app/core/services/account.service'

@Component({
  selector: 'checkout-address',
  templateUrl: './address.component.html'
})
export class AddressComponent {

  @Input() checkoutForm:FormGroup

  constructor (private servAccount:AccountService, private toastr:ToastrService) { }

  saveUserAddress() {
    this.servAccount.userAddressUpdate(this.checkoutForm.get('addressForm').value)
      .subscribe(
        (address) => {
          console.log(address);
          this.toastr.success('Address saved');
          this.checkoutForm.get('addressForm').reset(address);
        }, 
        (err) => {
          this.toastr.error(err.message);
        }
      );
  }

}
