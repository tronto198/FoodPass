import { FoodtruckData } from './foodtruck';
import { OrderedMenuData } from './ordered-menu';
import { WaitingData } from './waiting';
import {ControlledData} from "../services/data-ctrl/data.interface";

export interface OrderConformData extends ControlledData{
    id: number;
    foodtruckId?:number;
    orderNo?: number;
    userId:number;
    orderedMenu?: OrderedMenuData[];
    otherRequest?:string,
    waiting?: WaitingData;
}