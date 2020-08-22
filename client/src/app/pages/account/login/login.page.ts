import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// ---
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'account-login',
  templateUrl: './login.page.html'
})
export class LoginPage implements OnInit {

  returnUrl;

  loginForm:FormGroup;

  constructor (
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private servAccount:AccountService
  ) { }

  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/shop';
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(
        '', Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
      ),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.servAccount.login(this.loginForm.value)
      .subscribe(
        () => {
          this.router.navigateByUrl(this.returnUrl);
        },
        (err) => {
          console.log(err);
        }
      )
  }

}
