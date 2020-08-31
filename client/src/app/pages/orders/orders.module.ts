import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// ---
import { SharedModule } from 'src/app/common/shared.module'
// ---
import { OrdersPage } from 'src/app/pages/orders/orders.page'
import { OrderDetailPage } from 'src/app/pages/orders/details/order-detail.page'

@NgModule({
  declarations: [
    OrdersPage,
    OrderDetailPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: OrdersPage },
      { path: ':id', component: OrderDetailPage }, 
    ])
  ],
  providers: [
    
  ]
})
export class OrdersModule { }
