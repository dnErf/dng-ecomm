import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
// ---
import { environment as env } from 'src/environments/environment';
import { iuser } from 'src/app/common/interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private currentUserSource = new ReplaySubject<iuser>(1);
  
  $currentUser = this.currentUserSource.asObservable();

  constructor(private http:HttpClient, private router:Router) 
  { }

  login(payload) {
    return this.http.post(`${env.baseUrl}/account/login`, payload)
      .pipe(
        map((user:iuser) => {
          if (user) {
            localStorage.setItem('token', user.token);
            this.currentUserSource.next(user);
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }

  register(payload) {
    return this.http.post(`${env.baseUrl}/account/register`, payload)
      .pipe(
        map((user:iuser) => {
          if (user) {
            localStorage.setItem('token', user.token);
            this.currentUserSource.next(user);
          }
        })
      )
  }

}
