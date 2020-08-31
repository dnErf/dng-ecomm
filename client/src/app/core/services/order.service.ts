import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http:HttpClient
  ) { }

  getOrdersForUser() {
    return this.http.get(`${env.baseUrl}/orders`);
  }

  getOrderDetailed(id:number) {
    return this.http.get(`${env.baseUrl}/orders/${id}`);
  }

}
