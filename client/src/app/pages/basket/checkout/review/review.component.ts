import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
// ---
import { ibasket } from 'src/app/common/interfaces/ibasket';
import { BasketService } from 'src/app/core/services/basket.service'

@Component({
  selector: 'checkout-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {

  $basket:Observable<ibasket>;

  constructor (private servBasket:BasketService) { }

  ngOnInit() {
    this.$basket = this.servBasket.$basket;
  }

}
