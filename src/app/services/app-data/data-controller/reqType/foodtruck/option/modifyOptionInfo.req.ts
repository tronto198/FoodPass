import { FoodtruckReq } from '../foodtruck.req';

export interface reqModifyOptionInfo extends FoodtruckReq {
    menuId: number;
    optionId: number;

    //추가
}

export interface resModifyOptionInfo {
    
}