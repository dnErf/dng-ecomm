import { Component, Input } from '@angular/core';

@Component({
  selector: 'pager-header',
  templateUrl: './pager-header.component.html'
})
export class PagerHeaderComponent {
  @Input() totalCount:number;
  @Input() pageSize:number;
  @Input() pageNumber:number;
}