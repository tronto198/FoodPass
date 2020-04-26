import { Injectable } from '@angular/core';
import { OrderData } from 'src/app/data/order';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { OptionData } from 'src/app/data/option';
import { OrderedMenuData } from 'src/app/data/ordered-menu';
import { MenuInfoPageModule } from 'src/app/tabs/tab-home/menu-info/menu-info.module';
import { CheckboxValue, CheckValue } from 'src/app/data/checkbox-value';

@Injectable({
  providedIn: 'root'
})
export class BasketControllerService extends CheckboxValue{
  // basket : Map<FoodtruckData, cbOrderData> = new Map<FoodtruckData, cbOrderData>();
  basket : OrderData[] = [];

  constructor() {
    super();
  }

  get items(){
    return this.basket;
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

    const existIndex = this.basket.find(el=>{
      el.foodtruckinfo.id == foodtruck.id;
    });

    if(existIndex == undefined){
      //푸드트럭 첫 주문
      
      let newOrder : OrderData = new OrderData(this, this.basket.length);

      let newOrderedMenu : OrderedMenuData = new OrderedMenuData(newOrder, 0);
      newOrderedMenu.menuinfo = menu;
      newOrderedMenu.optioninfo = option;
      newOrderedMenu.amount = amount;


      newOrder.foodtruckinfo = foodtruck;
      newOrder.orderedMenu = [newOrderedMenu];

      this.basket.push(newOrder);
    }
    else{
      //이미 같은 푸드트럭의 주문이 있음
      let existOrder : OrderData = this.basket[Number(existIndex)];
      let newOrderedMenu : OrderedMenuData = new OrderedMenuData(existOrder, existOrder.items.length);
      newOrderedMenu.menuinfo = menu;
      newOrderedMenu.optioninfo = option;
      newOrderedMenu.amount = amount;

      existOrder.orderedMenu.push(newOrderedMenu);
    }

  }

  get totalPrice(){
    let price : number = 0;
    this.basket.forEach((value, key, obj) =>{
      if(value.check)
      value.orderedMenu.forEach((value, index, arr)=>{
        //여기에서 체크되잇는지 확인 
        if(value.check){
          price += value.amount * (value.menuinfo.price + value.optioninfo.extraPrice);
        }
      })
    });

    return price;
  }

  // get basket() : OrderData[]{
  //   return Array.from(this.basket.values());
  // }
}

