import { FoodtruckReq } from '../foodtruck.req';
import { MenuData } from 'src/app/data/menu';

export interface reqNewMenu extends FoodtruckReq, MenuData {
    
}

export interface resNewMenu {
    menuId: number;
    optionId: number;
}