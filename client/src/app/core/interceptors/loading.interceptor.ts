import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
// ---
import { LoadingService } from 'src/app/core/services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private servLoading:LoadingService) { }

  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
    if (!req.url.includes('emailexists') 
      || !(req.method === 'POST' && req.url.includes('orders'))
    ) {
      this.servLoading.busy();
    }
    return next.handle(req).pipe(
      delay(10),
      finalize(() => {
        this.servLoading.idle();
      })
    );
  }

}
