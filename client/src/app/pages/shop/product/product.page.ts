import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
})
export class ProductPage implements OnInit {

  product;
  $breadcrumb;

  constructor (
    private route:ActivatedRoute,
    private servProduct:ProductService,
    private servBreadcrumb:BreadcrumbService
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

}
