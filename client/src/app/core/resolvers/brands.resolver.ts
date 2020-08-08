import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of as ObservableOf } from 'rxjs';
import { catchError } from 'rxjs/operators';
// ---
import { ibrand } from 'src/app/common/interfaces/ibrand';
import { ProductService } from 'src/app/core/services/product.service';

@Injectable()
export class BrandsResolver implements Resolve<ibrand[]> {

  constructor (
    private productService:ProductService,
    private router:Router,
  ) { }

  resolve(route:ActivatedRouteSnapshot):Observable<ibrand[]> {
    return this.productService.getBrands()
      .pipe(
        catchError((err) => ObservableOf(null))
      );
  }

}