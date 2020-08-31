import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// ---
import { AppTextComponent } from 'src/app/components/app-text.component';
import { BasketSummaryComponent } from 'src/app/components/basket-summary.component';
import { BasketTotalComponent } from 'src/app/components/basket-total.component';

@NgModule({
  declarations: [
    AppTextComponent,
    BasketSummaryComponent,
    BasketTotalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    AppTextComponent,
    BasketSummaryComponent,
    BasketTotalComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
