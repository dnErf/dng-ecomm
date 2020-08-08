import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
// ---
import { PagerComponent } from 'src/app/components/pager.component';
import { PagerHeaderComponent } from 'src/app/components/pager-header.component';

@NgModule({
  declarations: [
    PagerComponent,
    PagerHeaderComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  exports: [
    PaginationModule,
    PagerComponent,
    PagerHeaderComponent
  ]
})
export class SharedModule { }
