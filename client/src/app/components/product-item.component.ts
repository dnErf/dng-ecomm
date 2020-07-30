import { Component, OnInit, Input } from '@angular/core';
import { iproduct } from 'src/app/common/interfaces/iproduct';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
})
export class ProductItem implements OnInit {

  @Input() product:iproduct;

  constructor (
  ) { }

  ngOnInit() {
  }

}
