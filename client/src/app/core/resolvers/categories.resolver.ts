import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of as ObservableOf } from 'rxjs';
import { catchError } from 'rxjs/operators';
// ---
import { icategory } from 'src/app/common/interfaces/icategory';
import { ProductService } from 'src/app/core/services/product.service';

@Injectable()
export class CategoriesResolver implements Resolve<icategory[]> {

  constructor (
    private productService:ProductService,
    private router:Router,
  ) { }

  resolve(route:ActivatedRouteSnapshot):Observable<icategory[]> {
    return this.productService.getCategories()
      .pipe(
        catchError((err) => ObservableOf(null))
      );
  }

}