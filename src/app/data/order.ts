import { FoodtruckData } from './foodtruck';
import { MenuData } from './menu';
import { OptionData } from './option';
import { OrderedMenuData } from './ordered-menu';

export interface OrderData {
    id: number,
    foodtruckinfo: FoodtruckData,
    menuinfo: OrderedMenuData[]
}