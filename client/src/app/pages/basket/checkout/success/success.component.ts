import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// ---
import { iorder } from 'src/app/common/interfaces/iorder';

@Component({
  selector: 'checkout-success',
  templateUrl: './success.component.html'
})
export class SuccessComponent {

  order:iorder;

  constructor (private router:Router) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation && navigation.extras && navigation.extras.state;
    if (state) {
      this.order = state as iorder;
    }
  }

}
