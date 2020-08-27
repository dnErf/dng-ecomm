import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { iorderToCreate } from 'src/app/common/interfaces/iorder';
import { ideliveryMethod } from 'src/app/common/interfaces/idelivery';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(
    private http:HttpClient
  ) { }

  creatOrder(order:iorderToCreate) {
    return this.http.post(`${ env.baseUrl }/orders`, order);
  }

  getDeliveryMethods() {
    return this.http.get(`${ env.baseUrl }/orders/deliveryMethods`)
      .pipe(
        map((dm:ideliveryMethod[]) => {
          return dm.sort((a, b) => b.price - a.price);
        })
      );
  }

}
