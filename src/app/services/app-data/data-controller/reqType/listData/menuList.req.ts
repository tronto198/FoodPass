import { MenuData } from 'src/app/data/menu';

export interface reqMenuList {
    foodtruckId : number;
}

export interface resMenuList {
    menuList : MenuData[];
}