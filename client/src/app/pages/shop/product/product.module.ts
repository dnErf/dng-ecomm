import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// ---
import { SharedModule } from 'src/app/common/shared.module';
import { ProductItem } from 'src/app/components/product-item.component';
import { ShopPage } from 'src/app/pages/shop/shop.page';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ShopPage } 
    ])
  ],
  providers: [
    
  ]
})
export class ShopModule { }
