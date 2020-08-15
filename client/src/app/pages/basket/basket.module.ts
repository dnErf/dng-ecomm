import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// --- 
import { BasketPage } from 'src/app/pages/basket/basket.page';
import { BasketTotalComponent } from 'src/app/components/basket-total.component';

@NgModule({
  declarations: [
    BasketPage,
    BasketTotalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BasketPage }
    ]),
    
  ],
  providers: [
    
  ]
})
export class BasketModule { }