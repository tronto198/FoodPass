import { FoodtruckData } from './foodtruck';
import { MenuData } from './menu';
import { OptionData } from './option';
import { OrderedMenuData } from './ordered-menu';
import { CheckValue, CheckboxValue } from './checkbox-value';

export class OrderData extends CheckboxValue{
    id?: number;
    foodtruckinfo: FoodtruckData;
    orderedMenu: OrderedMenuData[];

    constructor(parent: CheckboxValue, itemIndex: number){
        super(parent, itemIndex);
    }

    get items(){
        return this.orderedMenu;
    }
}