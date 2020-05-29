import { FoodtruckData } from './foodtruck';
import { OrderedMenuData } from './ordered-menu';
import { WaitingData } from './waiting';

export interface OrderData{
    id?: number;
    foodtruckinfo: FoodtruckData;
    orderedMenu: OrderedMenuData[];
    
    orderNo?: number;
    waiting?: WaitingData;
}
