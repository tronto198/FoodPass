import { MenuData } from 'src/app/data/menu';

export interface reqMenuData {
    foodtruckId : number;
    menuId : number;
}

export interface resMenuData {
    menuData : MenuData;
}