import { FoodtruckData } from './foodtruck';
import { OrderedMenuData } from './ordered-menu';

export interface OrderData{
    id?: number;
    foodtruckinfo: FoodtruckData;
    orderedMenu: OrderedMenuData[];
}
