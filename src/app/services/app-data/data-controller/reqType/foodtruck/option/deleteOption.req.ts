import { FoodtruckReq } from '../foodtruck.req';

export interface reqDeleteOption extends FoodtruckReq {
    menuId: number;
    optionId: number;
}

export interface resDeleteOption {
    
}