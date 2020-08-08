import { iproduct } from './iproduct';

export interface ipaginated {
  pageIndex:number;
  pageSize:number;
  count:number;
  data:iproduct[];
}