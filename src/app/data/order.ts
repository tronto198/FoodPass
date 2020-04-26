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

    get price(){
        let price = 0;
        for(let menu of this.orderedMenu){
            if(menu.value){
                price += menu.amount * (menu.menuinfo.price + menu.optioninfo.extraPrice);
            }
        }
        return price;
    }
}