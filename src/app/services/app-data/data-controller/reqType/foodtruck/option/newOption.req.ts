import { FoodtruckReq } from '../foodtruck.req';

export interface reqNewMenu extends FoodtruckReq {
    menuId: number;
    //추가
}

export interface resNewMenu {
    menuId: number;
    optionId: number;
}