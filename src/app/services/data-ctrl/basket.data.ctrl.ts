// import { Injectable } from '@angular/core';
// import { DataStorage } from './data.storage';
// import { BasketOrder } from 'src/app/data/basket-data/basket-order';

// @Injectable()
// export class BasketDataCtrl {
//     private dataStorage = new DataStorage<BasketOrder>();

//     getBasketList() : BasketOrder[] {
//         return this.dataStorage.toArray();
//     }

//     findBasketById(id: number) : BasketOrder{
//         return this.dataStorage.getData(id);
//     }

//     setBasketData(...data: BasketOrder[]){
//         data.forEach((val)=>{
//             this.dataStorage.setData(val);
//         })
        
//     }
    
// }
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { OptionData } from 'src/app/data/option';
import { CheckboxValue } from 'src/app/data/basket-data/checkbox-value';
import { BasketOrder } from 'src/app/data/basket-data/basket-order';
import { BasketOrderedMenu } from 'src/app/data/basket-data/basket-ordered-menu';
import { OrderData } from 'src/app/data/order';
import { orderRequest, reqOrder, resOrder } from 'src/app/services/communication/reqType/order/order.req';
import { reqUrl } from 'src/app/services/communication/reqType/req-url.enum';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BasketDataCtrl extends CheckboxValue{
  basket : BasketOrder[] = [];

  constructor(private dataCtrl : CommunicationService) {
    super();
  }

  get items(){
    return this.basket;
  }

  makeTestdata(){
    let ftId = Math.floor(Math.random() * 1000);
    let menucount = Math.floor(Math.random() * 3) + 1;

    for(let i = 0; i < menucount; i++){
      let menuId = Math.floor(Math.random() * 1000);
      let price = Math.floor(Math.random() * 80) * 100;
      let ftdata : FoodtruckData = {
        id: ftId,
        name: ftId  + " foodtruck",
        introduction: "test",
        notice: ""
      }
        ftdata.waiting = {person: 3, time: 5};
      let menudata : MenuData ={
        id: menuId,
        menuName: menuId + " menu",
        price: price
      };
      let optiondata : OptionData = {
        id: ftId + menuId,
        name: ftId + menuId + " option",
        extraPrice: 500
      };
  
      let amount = Math.floor(Math.random() * 2) + 1;
      this.push(ftdata, menudata, optiondata, amount);
    }
  }

  push(foodtruck : FoodtruckData, menu: MenuData, option: OptionData, amount: number = 1){

    const existIndex : number = this.basket.findIndex((value, index, obj) =>{
      return value.foodtruckinfo.id == foodtruck.id;
    })

    if(existIndex == -1){
      //푸드트럭 첫 주문
      
      let newOrder : BasketOrder = new BasketOrder(this);

      let newOrderedMenu : BasketOrderedMenu = new BasketOrderedMenu(newOrder);
      newOrderedMenu.menuinfo = menu;
      newOrderedMenu.optioninfo = option;
      newOrderedMenu.amount = amount;


      newOrder.foodtruckinfo = foodtruck;
      newOrder.orderedMenu = [newOrderedMenu];

      this.basket.push(newOrder);
    }
    else{
      //이미 같은 푸드트럭의 주문이 있음
      let existOrder : BasketOrder = this.basket[existIndex];
      let newOrderedMenu : BasketOrderedMenu = new BasketOrderedMenu(existOrder);
      newOrderedMenu.menuinfo = menu;
      newOrderedMenu.optioninfo = option;
      newOrderedMenu.amount = amount;

      existOrder.orderedMenu.push(newOrderedMenu);
    }

    console.log("menu pushed into basket");

  }

  get totalPrice(){
    let price : number = 0;

    for(let order of this.basket){
      price += order.price;
    }

    return price;
  }

  private classifyCheckedOrder() : [BasketOrder[], BasketOrder[]]{
    let checkedOrder : BasketOrder[] = [];
    let unCheckedOrder : BasketOrder[] = [];

    this.basket.forEach((val, index, arr)=>{
      if(val.value){
        let [remaining, extractOrder] = val.extractCheckedMenu();
        if(remaining){
          unCheckedOrder.push(val);
        }
        checkedOrder.push(extractOrder);
      }
      
    });

    this.toggle();

    return [checkedOrder, unCheckedOrder];
  }

  private orderListChanged(){
    this.basket.forEach((val, index, arr)=>{
      val.checkEmpty();
    })
  }

  private extractCheckedOrder() : BasketOrder[] {
    let [checked, unChecked] = this.classifyCheckedOrder();
    this.basket = unChecked;
    this.orderListChanged();
    this.value = true;
    return checked;
  }

  orderCheckedItem() : Promise<OrderData[]> {
    let checkedOrderList = this.extractCheckedOrder();
    
    return new Promise((resolve, reject) =>{
      
      
      let orderList : orderRequest[] = [];
      let orderDataList: OrderData[] = [];
      checkedOrderList.forEach((val, index, arr)=>{
        let orderinfo : OrderData = val.extractData();
        orderDataList.push(orderinfo);

        let order : orderRequest = {
          foodtruckId: orderinfo.foodtruckinfo.id,
          orderedMenu: [],
          price: orderinfo.price
        };
        orderinfo.orderedMenu.forEach((val)=>{
          order.orderedMenu.push({
            menuId: val.menuinfo.id,
            optionId: val.optioninfo.id,
            amount: val.amount
          });
        });
        
        orderList.push(order);
      });

      // orderList.forEach((val, index) =>{
      //   val.id = index;
      // });
      
      let req : reqOrder = {
        orderList : orderList
      };

      // let resExpect : resOrder = {
      //   orderList : orderList
      // };

      // this.dataCtrl.testRequest<resOrder>(reqType, req, true, resExpect, 1500)
      // .then(data =>{
      //   resolve(data.orderList);
      // }).catch(e =>{
      //   reject(e);
      // })

      this.dataCtrl.request<resOrder>(reqUrl.order, req).then(data =>{
        console.log(data);
        let orderedList : OrderData[] = [];
        data.orderList.forEach((val, index) =>{
          for(let i = index; i < orderDataList.length; i++){
            if(orderDataList[i].foodtruckinfo.id == val.foodtruckId){
              orderDataList[i].id = val.id;
              orderedList.push(orderDataList[i]);
              break;
            }
            else{
              // orderDataList.splice(i, 1);
            }
          }
        })
        resolve(orderedList);
      });
    });
  }

}
