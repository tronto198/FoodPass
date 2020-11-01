import { OrderData } from 'src/app/data/order';
import { OrderWatingData } from 'src/app/data/order-wating';

export interface reqOrderWating {
   userId:number
}

export interface resOrderWating {
   orderData:OrderData[]
   //orderWatingList:OrderWatingData[]
}