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
    this.servLoading.busy();
    return next.handle(req).pipe(
      delay(50),
      finalize(() => {
        this.servLoading.idle();
      })
    );
  }

}
