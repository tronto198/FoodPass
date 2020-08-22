import { FoodtruckReq } from '../foodtruck.req';
import { OptionData } from 'src/app/data/option';

export interface reqModifyOptionInfo extends FoodtruckReq, OptionData {
    menuId: number;
}

export interface resModifyOptionInfo {
    
}