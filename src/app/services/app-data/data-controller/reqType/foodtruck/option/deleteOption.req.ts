import { FoodtruckReq } from '../foodtruck.req';

export interface reqDeleteOption extends FoodtruckReq {
    menuId: number;
    id: number;
}

export interface resDeleteOption {
    
}