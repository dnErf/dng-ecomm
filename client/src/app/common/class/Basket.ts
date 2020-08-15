import { v4 as uuid } from 'uuid'
// ---
import { ibasket, ibasketItem } from 'src/app/common/interfaces/ibasket';

export class Basket implements ibasket {
  id = uuid();
  items:ibasketItem[] = [];
}