import { BreadcrumbModule } from 'xng-breadcrumb';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
// ---
import { LoadingInterceptor } from 'src/app/core/interceptors/loading.interceptor';
import { SharedModule } from 'src/app/common/shared.module';
import { ProductItem } from 'src/app/components/product-item.component';
import { ProductPage } from 'src/app/pages/shop/product/product.page';
import { ShopPage } from 'src/app/pages/shop/shop.page';
import { PagerComponent } from 'src/app/components/pager.component';
import { PagerHeaderComponent } from 'src/app/components/pager-header.component';

@NgModule({
  declarations: [
    ShopPage,
    ProductPage,
    ProductItem,
    PagerComponent,
    PagerHeaderComponent
  ],
  imports: [
    BreadcrumbModule,
    CommonModule,
    PaginationModule.forRoot(),
    RouterModule.forChild([
      { path: '', component: ShopPage, data: { breadcrumb: 'Shop' } }, 
      { path: ':id', component: ProductPage, data: { breadcrumb: { alias: 'productName' } } },
    ]),
    
  ],
  providers: [
  ]
})
export class ShopModule { }
