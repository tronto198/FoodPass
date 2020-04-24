import { Injectable } from '@angular/core';
import { OrderData } from 'src/app/data/order';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { OptionData } from 'src/app/data/option';
import { OrderedMenuData } from 'src/app/data/ordered-menu';
import { MenuInfoPageModule } from 'src/app/tabs/tab-home/menu-info/menu-info.module';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { CheckboxValue } from 'src/app/data/checkbox-value';

@Injectable({
  providedIn: 'root'
})
export class BasketControllerService {
  basket : Map<number, OrderData> = new Map<number, OrderData>();
  rootCheckboxValue: CheckboxValue;

  constructor() {
    this.rootCheckboxValue = new CheckboxValue();
  }

  push(foodtruck : FoodtruckData, menu: MenuData, option: OptionData, amount: number = 1){
    let orderedMenu : OrderedMenuData = {
      menuinfo: menu,
      optioninfo: option,
      amount: amount
    };

    if(this.basket.has(foodtruck.id)){
      this.basket.get(foodtruck.id).orderedMenu.push(orderedMenu);
    }
    else{
      let newOrder : OrderData = {
        foodtruckinfo: foodtruck,
        orderedMenu: [orderedMenu] 
      };
      this.basket.set(foodtruck.id, newOrder);
    }

  }

  get totalPrice(){
    let price : number = 0;
    this.basket.forEach((value, key, obj) =>{
      value.orderedMenu.forEach((value, index, arr)=>{
        //여기에서 체크되잇는지 확인 
        price += value.amount * value.menuinfo.price;
      })
    });

    return price;
  }

}