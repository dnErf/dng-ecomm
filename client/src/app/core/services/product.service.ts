import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
// ---
import { environment as env } from 'src/environments/environment';
import { ibrand } from 'src/app/common/interfaces/ibrand';
import { icategory } from 'src/app/common/interfaces/icategory';
import { iproduct } from 'src/app/common/interfaces/iproduct';
import { ipaginated } from 'src/app/common/interfaces/ipaginated';
import { ProductParams } from 'src/app/common/class/ProductParams';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getBrands():Observable<ibrand[]> {
    return this.http.get<ibrand[]>(`${env.baseUrl}/products/brands`);
  }

  getCategories():Observable<icategory[]> {
    return this.http.get<icategory[]>(`${env.baseUrl}/products/categories`);
  }

  getProducts(payload:ProductParams):Observable<ipaginated> {
    let params = new HttpParams();
    if (payload.brandId !== 0) {
      params = params.append('brandId', payload.brandId.toString());
    }
    if (payload.categoryId !== 0) {
      params = params.append('categoryId', payload.categoryId.toString());
    }
    if (payload.search) {
      params = params.append('search', payload.search);
    }
    params = params.append('sort', payload.sort);
    params = params.append('pageIndex', payload.pageNumber.toString());
    params = params.append('pageSize', payload.pageSize.toString());
    return this.http.get<ipaginated>(`${env.baseUrl}/products`, { params, observe: 'response'})
      .pipe(
        map((response) => response.body)
      );
  }

  getProduct(id):Observable<iproduct> {
    return this.http.get<iproduct>(`${env.baseUrl}/products/${id}`)
  }

  

}
