import { OrderHistoryData } from 'src/app/data/order-history';

export interface reqOrderHistory{
    id:number;
}

export interface resOrderHistory {
    historyList : OrderHistoryData[];
}