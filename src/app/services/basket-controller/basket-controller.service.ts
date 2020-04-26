import { Injectable } from '@angular/core';
import { OrderData, cbOrderData } from 'src/app/data/order';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { OptionData } from 'src/app/data/option';
import { OrderedMenuData } from 'src/app/data/ordered-menu';
import { MenuInfoPageModule } from 'src/app/tabs/tab-home/menu-info/menu-info.module';
import { CheckboxValue, CheckValue } from 'src/app/data/checkbox-value';

@Injectable({
  providedIn: 'root'
})
export class BasketControllerService extends CheckboxValue<cbOrderData>{
  basket : Map<FoodtruckData, cbOrderData> = new Map<FoodtruckData, cbOrderData>();
  // basket : cbOrderData[] = [];

  constructor() {
    super();
  }

  makeTestdata(){
    let id1 = Math.floor(Math.random() * 1000);
    let id2 = Math.floor(Math.random() * 1000);
    let price = Math.floor(Math.random() * 100) * 100;
    let ftdata : FoodtruckData = {
      id: id1,
      name: id1 + " ft"
    };
    let menudata : MenuData ={
      id: id2,
      name: id2 + " menu",
      price: price
    };
    let optiondata : OptionData = {
      id: id1 + id2,
      name: id1 + id2 + " option",
      extraPrice: 500
    };

    let amount = Math.floor(Math.random() * 4);
    this.push(ftdata, menudata, optiondata, amount);
  }

  push(foodtruck : FoodtruckData, menu: MenuData, option: OptionData, amount: number = 1){
    let orderedMenu : OrderedMenuData = {
      menuinfo: menu,
      optioninfo: option,
      amount: amount,
      checked: true
    };

    if(this.basket.has(foodtruck)){
      this.basket.get(foodtruck).orderedMenu.push(orderedMenu);
    }
    else{
      let newOrder : OrderData = {
        foodtruckinfo: foodtruck,
        orderedMenu: [orderedMenu],
        checked: true 
      };
      this.basket.set(foodtruck, new cbOrderData(newOrder));
      
    }

  }

  get totalPrice(){
    let price : number = 0;
    this.basket.forEach((value, key, obj) =>{
      if(value.checked)
      value.orderedMenu.forEach((value, index, arr)=>{
        //여기에서 체크되잇는지 확인 
        if(value.checked){
          price += value.amount * (value.menuinfo.price + value.optioninfo.extraPrice);
        }
      })
    });

    return price;
  }

  get basketarr() : cbOrderData[]{
    return Array.from(this.basket.values());
  }
}

