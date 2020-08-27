import { iaddress } from './iaddress';

export interface iorderToCreate {
  basketId:string;
  deliveryMethodId:number;
  shipToAddress:iaddress;
}

export interface iorder {
  id:number;
  buyerEmail:string;
  orderDate:string;
  shipToAddress:iaddress;
  deliveryMethod:string;
  shippingPrice:number;
  orderItems:iorderItem[];
  subtotal:number;
  total:number;
  status:string;
}

export interface iorderItem {
  productId:number;
  productName:string;
  pictureUrl:string;
  price:number;
  quantity:number;
}