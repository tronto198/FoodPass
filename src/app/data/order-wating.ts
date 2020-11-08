import { BasketOrderedMenu } from './basket-ordered-menu';
import { FoodtruckData } from './foodtruck';
import { WaitingData } from './waiting';

export interface OrderWaitingData {
    id: number;
    foodtruckId?:number;
    foodtruckInfo?: FoodtruckData;
    orderedMenu?: BasketOrderedMenu[];
    price: number;
    orderNo?: number;
    waiting?: WaitingData;
}