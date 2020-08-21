import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// --- 
import { LoginPage } from 'src/app/pages/account/login/login.page';
import { RegisterPage } from 'src/app/pages/account/register/register.page';

@NgModule({
  declarations: [
    LoginPage,
    RegisterPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'login', component: LoginPage },
      { path: 'register', component: RegisterPage }
    ]),
    
  ],
  providers: [
    
  ]
})
export class AccountModule { }