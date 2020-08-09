import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// ---
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
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ShopPage }, 
      { path: ':id', component: ProductPage },
    ]),
    
  ],
  providers: [
    
  ]
})
export class ShopModule { }
