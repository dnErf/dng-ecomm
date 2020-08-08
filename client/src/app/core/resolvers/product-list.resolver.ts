import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of as ObservableOf } from 'rxjs';
import { catchError } from 'rxjs/operators';
// ---
import { iproduct } from 'src/app/common/interfaces/iproduct';
import { ProductService } from 'src/app/core/services/product.service';

// @Injectable()
// export class ProductListResolver implements Resolve<iproduct[]> {

//   constructor (
//     private productService:ProductService,
//     private router:Router,
//   ) { }

//   resolve(route:ActivatedRouteSnapshot):Observable<iproduct[]> {
//     return this.productService.getProducts()
//       .pipe(
//         catchError((err) => ObservableOf(null))
//       );
//   }

// }