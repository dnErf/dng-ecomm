import { Component, OnInit } from '@angular/core';
// ---
import { BasketService } from 'src/app/core/services/basket.service'
import { Observable } from 'rxjs';
import { ibasket } from './common/interfaces/ibasket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  $basket:Observable<ibasket>;

  constructor (private servBasket:BasketService) { }

  ngOnInit() {
    let basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.servBasket.getBasket(basketId).subscribe(
        () => {
          console.log('basket init');
          this.$basket = this.servBasket.$basket;
        },
        (err) => console.log(err)
      )
    }
  }

}
