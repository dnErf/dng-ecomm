import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// ---
import { environment as env } from 'src/environments/environment';
import { iproduct } from 'src/app/common/interfaces/iproduct'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<iproduct[]> {
    return this.http.get<iproduct[]>(`${env.baseUrl}/products`);
  }

  getProduct(id:number):Observable<iproduct> {
    return this.http.get<iproduct>(`${env.baseUrl}/products/${id}`)
  }

}
