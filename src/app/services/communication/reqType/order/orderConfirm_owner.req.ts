import { OrderConformData } from 'src/app/data/order-confirm';

export interface reqOrderConfirm {
    foodtruckId:number;
}

export interface resOrderConfirm {
    orderConfirmList:orderConformResponse[]
}

export interface orderConformResponse {
   
    id:number,
    foodtruckId: number;
    orderNo:number,
    userId:number,
    orderedMenu: {
        menuId: number;
        optionId: number;
        amount: number;
    },
    otherRequest?:string,
    waiting?: number;
}