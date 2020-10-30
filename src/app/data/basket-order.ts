import { identifierModuleUrl } from '@angular/compiler';
import { ControlledData } from '../services/data-ctrl/data.interface';
import { FoodtruckDataCtrl } from '../services/data-ctrl/foodtruck.data.ctrl';
import { BasketOrderedMenu } from './basket-ordered-menu';
import { FoodtruckData } from './foodtruck';
import { OrderData } from './order';
import { OrderedMenuData } from './ordered-menu';


export class BasketOrder implements ControlledData{
    orderId:number;
    orderedMenu: BasketOrderedMenu[] = [];
    foodtruckInfo:FoodtruckData;
    constructor(
        private foodtruckId: number,
        private dataCtrl: FoodtruckDataCtrl,){
    }

    get id() {
        return this.foodtruckId;
    }
   // menu.amount * (this.dataCtrl.findMenuById(id, menu.menuId).price + this.dataCtrl.findOptionById(id, menu.menuId, menu.optionId).extraPrice)
    get price(){
        let price = 0;
        for(let menu of this.orderedMenu){
            if(menu.menuId){
                price += menu.amount * (this.dataCtrl.findMenuById(this.id, menu.menuId).price+this.dataCtrl.findOptionById(this.id, menu.menuId, menu.optionId).extraPrice);
            }
        }
        return price;
    }


    extractData() : OrderData {
        let orderedMenuData : OrderedMenuData[] = [];
        this.orderedMenu.forEach((val, index, arr) =>{
            let ordered:OrderedMenuData={
                menuinfo:this.dataCtrl.findMenuById(this.id, val.menuId),
                optioninfo:this.dataCtrl.findOptionById(this.id, val.menuId, val.optionId),
                amount:val.amount
            }
            orderedMenuData.push(ordered);
        
        })
        let orderData : OrderData = {
            id : this.id,
            foodtruckInfo: this.foodtruckInfo,
            orderedMenu: orderedMenuData,
            price: this.price
        };

        return orderData;
    }
}