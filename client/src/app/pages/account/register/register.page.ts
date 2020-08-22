import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AsyncValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { timer, of } from 'rxjs';
// ---
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'account-register',
  templateUrl: './register.page.html'
})
export class RegisterPage implements OnInit {

  registerForm:FormGroup;
  errors:string[];

  constructor(
    private fb:FormBuilder, 
    private servAccount:AccountService, 
    private router:Router
  ) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      displayName: [null, [Validators.required]],
      email: [
        null,
        [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')],
        [this.validateEmailNotTaken()]
      ],
      password: [null, [Validators.required]]
    });
  }

  onSubmit() {
    this.servAccount.register(this.registerForm.value)
    .subscribe(
      (response) => {
        this.router.navigateByUrl('/shop');
      }, 
      (err) => {
        console.log(err);
        this.errors = err.errors;
      }
    );
  }

  validateEmailNotTaken():AsyncValidatorFn {
    return control => {
      return timer(500).pipe(
        switchMap(() => {
          if (!control.value) {
            return of(null);
          }
          return this.servAccount.checkEmailExists(control.value).pipe(
            map(res => {
              return res ? { emailExists: true } : null;
            })
          );
        })
      );
    };
  }

}
