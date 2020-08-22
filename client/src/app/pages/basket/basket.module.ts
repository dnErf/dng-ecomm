import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// --- 
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { BasketPage } from 'src/app/pages/basket/basket.page';
import { BasketTotalComponent } from 'src/app/components/basket-total.component';
import { CheckoutPage } from  'src/app/pages/basket/checkout/checkout.page';

@NgModule({
  declarations: [
    BasketPage,
    CheckoutPage,
    BasketTotalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BasketPage },
      { 
        path: 'checkout',
        canActivate: [AuthGuard],
        component: CheckoutPage
      }
    ]),
  ],
  providers: [
    
  ]
})
export class BasketModule { }