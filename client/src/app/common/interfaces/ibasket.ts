export interface ibasketItem {
  id:number;
  productName:string;
  price:number;
  quantity:number;
  pictureUrl:string;
  brand:string;
  category:string;
}

export interface ibasket {
  id:string;
  items:ibasketItem[];
  clientSecret?: string;
  paymentIntentId?:string;
  deliveryMethodId?:number;
  shippingPrice?:number;
}

export interface ibasketTotals {
  shipping:number;
  subtotal:number;
  total:number;
}
