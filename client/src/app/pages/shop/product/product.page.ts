import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
})
export class ProductPage implements OnInit {

  product;

  constructor (
    private route:ActivatedRoute,
    private servProduct:ProductService
  ) { }

  ngOnInit() {
    this.servProduct.getProduct(this.route.snapshot.paramMap.get('id'))
      .subscribe(
        (product) => {
          console.log(product);
          this.product = product;
        },
        (err) => {
          console.log(err);
        }
      );
  }

}
