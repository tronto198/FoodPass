import { FoodtruckData } from './foodtruck';
import { MenuData } from './menu';
import { OptionData } from './option';
import { OrderedMenuData } from './ordered-menu';
import { CheckValue, CheckboxValue } from './checkbox-value';

export class OrderData extends CheckboxValue{
    id?: number;
    foodtruckinfo: FoodtruckData;
    orderedMenu: OrderedMenuData[] = [];

    constructor(parent: CheckboxValue){
        super(parent);
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

    extractCheckedMenu() : [boolean, OrderData]{
        let remainMember : OrderedMenuData[] = [];
        let extractMember : OrderedMenuData[] = [];
        this.orderedMenu.forEach((val, index, arr)=>{
            if(val.value){
                //체크된것
                extractMember.push(val);
            }
            else{
                remainMember.push(val);
            }
        });

        this.orderedMenu = remainMember;
        const remainThis : boolean = this.orderedMenu.length != 0;

        const extractOrder = new OrderData(this.parent);
        extractOrder.orderedMenu = extractMember;
        extractOrder.foodtruckinfo = this.foodtruckinfo;

        return [remainThis, extractOrder];
    }
}