import { Component, OnInit } from '@angular/core';
// ---
import { AccountService } from 'src/app/core/services/account.service'
import { BasketService } from 'src/app/core/services/basket.service'
import { Observable } from 'rxjs';
import { ibasket } from './common/interfaces/ibasket';
import { iuser } from './common/interfaces/iuser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  $basket:Observable<ibasket>;
  $currentUser:Observable<iuser>;

  constructor (
    private servAccount:AccountService,
    private servBasket:BasketService
  ) { }

  ngOnInit() {
    this.loadBasket();
    this.loadCurrentUser();
  }

  loadBasket() {
    let basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.servBasket.getBasket(basketId).subscribe(
        () => {
          this.$basket = this.servBasket.$basket;
        },
        (err) => console.log(err)
      )
    }
  }

  loadCurrentUser() {
    let token = localStorage.getItem('token');
    this.servAccount.loadCurrentUser(token)
      .subscribe(
        () => {
          this.$currentUser = this.servAccount.$currentUser;
        },
        (err) => {
          console.log(err);
        }
      )
  }

  logout() {
    this.servAccount.logout();
  }

}
