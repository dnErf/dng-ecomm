import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html'
})
export class PagerComponent {
  @Input() totalCount:number;
  @Input() pageSize:number;
  @Output() pageChanged = new EventEmitter<number>();
}