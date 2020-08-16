import { BreadcrumbModule } from 'xng-breadcrumb';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// ---
import { LoadingInterceptor } from 'src/app/core/interceptors/loading.interceptor';
import { SharedModule } from 'src/app/common/shared.module';
import { ProductItem } from 'src/app/components/product-item.component';
import { ProductPage } from 'src/app/pages/shop/product/product.page';
import { ShopPage } from 'src/app/pages/shop/shop.page';

@NgModule({
  declarations: [
    ShopPage,
    ProductPage,
    ProductItem
  ],
  imports: [
    BreadcrumbModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ShopPage, data: { breadcrumb: 'Shop' } }, 
      { path: ':id', component: ProductPage, data: { breadcrumb: { alias: 'productName' } } },
    ]),
    
  ],
  providers: [
  ]
})
export class ShopModule { }
