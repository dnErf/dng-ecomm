import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// ---
import { HomePage } from 'src/app/pages/home/home.page'

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomePage } 
    ])
  ],
  providers: [
    
  ]
})
export class HomeModule { }
