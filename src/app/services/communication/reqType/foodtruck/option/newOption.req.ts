import { FoodtruckReq } from '../foodtruck.req';
import { MenuData } from 'src/app/data/menu';
import { OptionData } from 'src/app/data/option';

export interface reqNewOption extends FoodtruckReq, MenuData {
    name:String;
    extraPrice:number;
}

export interface resNewOption {
    menuId: number;
    optionId: number;
}