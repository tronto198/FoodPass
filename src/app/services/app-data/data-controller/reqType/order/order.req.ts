import { OrderData } from 'src/app/data/order';

export interface reqOrder {
    orderList : orderRequest[]
}

export interface resOrder {
    orderList : orderResponse[];
}

export interface orderRequest {
    foodtruckId: number;
    orderedMenu: {
        menuId: number;
        optionId: number;
        amount: number;
    }[]
}

export interface orderResponse {
    id: number;
    foodtruckId: number;
}