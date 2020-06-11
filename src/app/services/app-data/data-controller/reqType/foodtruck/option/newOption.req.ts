import { FoodtruckReq } from '../foodtruck.req';
import { OptionData } from 'src/app/data/option';

export interface reqNewMenu extends FoodtruckReq, OptionData {
    menuId: number;
}

export interface resNewMenu {
    menuId: number;
    optionId: number;
}