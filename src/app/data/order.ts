import { FoodtruckData } from './foodtruck';
import { MenuData } from './menu';
import { OptionData } from './option';
import { OrderedMenuData } from './ordered-menu';
import { CheckValue, CheckboxValue } from './checkbox-value';

export interface OrderData extends CheckValue {
    id?: number,
    foodtruckinfo: FoodtruckData,
    orderedMenu: OrderedMenuData[],
}

export class cbOrderData extends CheckboxValue<OrderedMenuData> implements OrderData{
    id?: number;
    foodtruckinfo: FoodtruckData;
    orderedMenu: OrderedMenuData[];

    constructor(orderdata: OrderData){
        super();
        super.setItems(this.orderedMenu);
        this.id = orderdata.id;
        this.foodtruckinfo = orderdata.foodtruckinfo;
        this.orderedMenu = orderdata.orderedMenu;
    }


}