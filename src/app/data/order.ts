import { FoodtruckData } from './foodtruck';
import { MenuData } from './menu';
import { OptionData } from './option';

export interface OrderData {
    id: number,
    foodtruck: FoodtruckData,
    menu: MenuData[],
    option: OptionData[]
}