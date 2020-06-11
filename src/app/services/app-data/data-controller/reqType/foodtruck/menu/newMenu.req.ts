import { FoodtruckReq } from '../foodtruck.req';

export interface reqNewMenu extends FoodtruckReq {
    //추가
}

export interface resNewMenu {
    menuId: number;
}