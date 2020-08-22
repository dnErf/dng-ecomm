import { Component, OnInit, ViewChild, ElementRef, Input, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'account-text',
  templateUrl: './account-text.component.html'
})
export class AccountTextComponent implements OnInit, ControlValueAccessor {

  @ViewChild('input', { static: true }) input: ElementRef;
  @Input() type = 'text';
  @Input() label: string;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit() {
    let control = this.controlDir.control;
    let validators = control.validator ? [control.validator] : [];
    let asyncValidators = control.asyncValidator ? [control.asyncValidator] : [];

    control.setValidators(validators);
    control.setAsyncValidators(asyncValidators);
    control.updateValueAndValidity();
  }

  onChange(event) { }

  onTouched() { }

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  isValidInput() {
    return (this.controlDir && this.controlDir.control && this.controlDir.control.touched) 
      ? this.controlDir.control.dirty 
      ? this.controlDir.control.valid 
      ? this.controlDir.control.value
      ? 'is-valid' 
      : 'is-invalid' 
      : 'is-invalid'
      : null  
      : null
  }

}