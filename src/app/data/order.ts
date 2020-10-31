import { FoodtruckData } from './foodtruck';
import { OrderedMenuData } from './ordered-menu';
import { WaitingData } from './waiting';
import {ControlledData} from "../services/data-ctrl/data.interface";

export interface OrderData extends ControlledData{
    id: number;
    foodtruckId?:number;
    foodtruckInfo?: FoodtruckData;
    orderedMenu?: OrderedMenuData[];
    price: number;
    orderNo?: number;
    waiting?: WaitingData;
}
//이거 history로 가져올때 문제 발생 - 너무 많아 조인이
/*
    그럼 order에 price를 넣고 orderedMenu를 받지 말까?
    orderHistory만을 위한 interface를 만드는 것도 고려
    그렇다면 넣는 것은 id, ftinfo, price 끝
*/