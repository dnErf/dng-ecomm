import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// ---
import { environment as env } from 'src/environments/environment';
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
    private servAccount:AccountService,
    private toastr:ToastrService
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

  logAsGuest() {
    this.loginForm.setValue({ email: env.GUEST_EM, password: env.GUEST_PW})
  }

  onSubmit() {
    this.servAccount.login(this.loginForm.value)
      .subscribe(
        () => {
          this.router.navigateByUrl(this.returnUrl);
        },
        (err) => {
          console.error(err);
          this.toastr.error('oops, something went wrong.');
        }
      )
  }

}
