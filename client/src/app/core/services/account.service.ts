import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, ReplaySubject, of as ObservableOf } from 'rxjs';
import { map } from 'rxjs/operators';
// ---
import { environment as env } from 'src/environments/environment';
import { iuser } from 'src/app/common/interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  // private currentUserSource = new BehaviorSubject<iuser>(null);
  private currentUserSource = new ReplaySubject<iuser>(1);
  
  $currentUser = this.currentUserSource.asObservable();

  constructor(private http:HttpClient, private router:Router) 
  { }

  checkEmailExists(email) {
    return this.http.get(`${env.baseUrl}/account/didEmailExists?email=${email}`);
  }

  loadCurrentUser(token) {

    if (token === null) {
      this.currentUserSource.next(null);
      return ObservableOf(null);
    }

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(`${env.baseUrl}/account`, { headers })
      .pipe(
        map((user:iuser) => {
          if (user) {
            localStorage.setItem('token', user.token);
            this.currentUserSource.next(user);
          }
        })
      );

  }

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
