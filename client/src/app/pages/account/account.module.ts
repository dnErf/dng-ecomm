import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// --- 
import { SharedModule } from 'src/app/common/shared.module';
import { LoginPage } from 'src/app/pages/account/login/login.page';
import { RegisterPage } from 'src/app/pages/account/register/register.page';

@NgModule({
  declarations: [
    RegisterPage,
    LoginPage,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'login', component: LoginPage },
      { path: 'register', component: RegisterPage }
    ])
  ],
  providers: [
    
  ]
})
export class AccountModule { }