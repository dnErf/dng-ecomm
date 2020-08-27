import { Component, OnInit, Input } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { Observable } from 'rxjs';

@Component({
  selector: 'checkout-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }]
})
export class StepperComponent extends CdkStepper implements OnInit {

  @Input() linearModeSelected:boolean

  ngOnInit() {
    this.linear = this.linearModeSelected;
  }

  onClick(index:number) {
    this.selectedIndex = index;
  }

}