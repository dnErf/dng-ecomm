import { CommonModule } from '@angular/common';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// --- 
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { BasketPage } from 'src/app/pages/basket/basket.page';
import { CheckoutPage } from  'src/app/pages/basket/checkout/checkout.page';
import { SharedModule } from 'src/app/common/shared.module';
// ---
import { AddressComponent } from  'src/app/pages/basket/checkout/address/address.component';
import { DeliveryComponent } from  'src/app/pages/basket/checkout/delivery/delivery.component';
import { PaymentComponent } from  'src/app/pages/basket/checkout/payment/payment.component';
import { ReviewComponent } from  'src/app/pages/basket/checkout/review/review.component';
import { StepperComponent } from  'src/app/pages/basket/checkout/stepper/stepper.component';
import { SuccessComponent } from  'src/app/pages/basket/checkout/success/success.component';

@NgModule({
  declarations: [
    BasketPage,
    CheckoutPage,
    AddressComponent,
    DeliveryComponent,
    PaymentComponent,
    ReviewComponent,
    StepperComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    CdkStepperModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: BasketPage },
      { 
        path: 'checkout',
        canActivate: [AuthGuard],
        component: CheckoutPage,
        children: [
          { path: 'success', component: SuccessComponent }
        ]
      }
    ]),
  ],
  providers: [
    
  ]
})
export class BasketModule { }