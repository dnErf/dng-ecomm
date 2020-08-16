import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html'
})
export class HomePage implements OnInit {

  product;

  constructor (
    private servProduct:ProductService
  ) { }

  ngOnInit() {
    this.servProduct.getProduct(15).subscribe(
      (res) => {
        this.product = res;
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
