import { OrderHistoryData } from 'src/app/data/order-history';

export interface reqOrderHistory{

}

export interface resOrderHistory {
    historyList : OrderHistoryData[];
}