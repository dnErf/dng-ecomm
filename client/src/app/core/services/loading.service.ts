import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loadingRequestCount = 0;

  constructor(private servSpinner:NgxSpinnerService) { }

  busy() {
    this.loadingRequestCount += 1;
    this.servSpinner.show(undefined, {
      type: 'ball-scale',
      bdColor: 'rgba(255,255,255,0.7)',
      color: '#333333'
    });
  }

  idle() {
    this.loadingRequestCount -= 1;
    if (this.loadingRequestCount <= 0) {
      this.loadingRequestCount = 0;
      this.servSpinner.hide();
    }
  }

}
