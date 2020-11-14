import { OrderData } from 'src/app/data/order';
import { OrderWaitingData } from 'src/app/data/order-wating';

export interface reqOrderWaiting {
   userId:number
}

export interface resOrderWaiting {
   //orderData:OrderData[]
   orderWaitingList:OrderWaitingData[]
}