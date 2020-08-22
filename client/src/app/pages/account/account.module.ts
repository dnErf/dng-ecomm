import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// --- 
import { LoginPage } from 'src/app/pages/account/login/login.page';
import { RegisterPage } from 'src/app/pages/account/register/register.page';
import { AccountTextComponent } from 'src/app/components/account-text.component';

@NgModule({
  declarations: [
    RegisterPage,
    LoginPage,
    AccountTextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginPage },
      { path: 'register', component: RegisterPage }
    ]),
    
  ],
  providers: [
    
  ]
})
export class AccountModule { }