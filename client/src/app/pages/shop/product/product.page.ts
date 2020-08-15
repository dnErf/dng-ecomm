import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
// --- 
import { BasketService } from 'src/app/core/services/basket.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
})
export class ProductPage implements OnInit {

  product;
  $breadcrumb;

  quantity = 1;

  constructor (
    private route:ActivatedRoute,
    private servBasket:BasketService,
    private servProduct:ProductService,
    private servBreadcrumb:BreadcrumbService,
  ) { }

  ngOnInit() {
    this.servProduct.getProduct(this.route.snapshot.paramMap.get('id'))
      .subscribe(
        (product) => {
          this.product = product;
          this.servBreadcrumb.set('@productName', product.name);
        },
        (err) => {
          console.log(err);
        }
      );
    this.$breadcrumb = this.servBreadcrumb.breadcrumbs$;
  }

  addItemToBasket() {
    this.servBasket.addItemToBasket(this.product, this.quantity);
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }

  incrementQuantity() {
    this.quantity += 1;
  }

}
