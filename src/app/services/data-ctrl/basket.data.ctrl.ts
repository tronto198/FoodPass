
import { Injectable } from '@angular/core';
import { FoodtruckDataCtrl } from './foodtruck.data.ctrl';
import { DataStorage } from './data.storage';
import { BasketOrder } from 'src/app/data/basket-order';
import { BasketOrderedMenu } from 'src/app/data/basket-ordered-menu';
import { OrderData } from 'src/app/data/order';
import { orderRequest, reqOrder, resOrder } from '../communication/reqType/order/order.req';
import { reqUrl } from '../communication/reqType/req-url.enum';
import { CommunicationService } from '../communication/communication.service';

@Injectable()
export class BasketDataCtrl {
  orderedFoodtruckIdList : number[] = [];
  private dataStorage = new DataStorage<BasketOrder>();

  constructor(
    private dataCtrl: FoodtruckDataCtrl,
    private comm: CommunicationService
  ) {}


  push(foodtruckId: number, menuId: number, optionId: number, amount: number){

    let orderedMenu : BasketOrderedMenu = {
      menuId: menuId,
      optionId: optionId,
      amount: amount
    }

    if(!this.dataStorage.has(foodtruckId)){
      this.setOrder(new BasketOrder(foodtruckId, this.dataCtrl))
      this.orderedFoodtruckIdList.push(foodtruckId)
    }
    this.getOrder(foodtruckId).orderedMenu.push(orderedMenu)
  }


  setOrder(order: BasketOrder){
    this.dataStorage.setData(order);
  }

  getOrder(foodtruckId: number) : BasketOrder{
    return this.dataStorage.getData(foodtruckId)

  }


  get totalPrice() : number{
    var price = 0;
    for(let id of this.orderedFoodtruckIdList){
      let foodtruck = this.getOrder(id);
      for(let menu of foodtruck.orderedMenu){
        price += menu.amount * (this.dataCtrl.findMenuById(id, menu.menuId).price + this.dataCtrl.findOptionById(id, menu.menuId, menu.optionId).extraPrice)
      } 
    }

    return price;
  }



orderAllItem() : Promise<OrderData[]> {
  let AllOrderList:BasketOrder[]=[]

    for(let id of this.orderedFoodtruckIdList){
      AllOrderList.push(this.getOrder(id))
    }
    
    return new Promise((resolve, reject) =>{
      
      
      let orderList : orderRequest[] = [];
     // let orderDataList: BasketOrder[] = [];

      AllOrderList.forEach((val, index, arr)=>{
        let orderinfo=val.extractData()
       // orderDataList.push(orderinfo);

        let order : orderRequest = {
          foodtruckId: orderinfo.foodtruckInfo.id,
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

      
      let req : reqOrder = {
        orderList : orderList
      };

      this.comm.request<resOrder>(reqUrl.order, req).then(data =>{
        console.log(data);
        let orderedList : OrderData[] = [];
        data.orderList.forEach((val, index) =>{
          for(let i = index; i < AllOrderList.length; i++){
            if(AllOrderList[i].foodtruckId == val.foodtruckId){
              AllOrderList[i].orderId = val.id;
              //orderList.push()
              let tempOrderData:OrderData={
                    id:  AllOrderList[i].orderId,
                    foodtruckInfo: this.dataCtrl.findFoodtruckById(AllOrderList[i].foodtruckId),
                    orderedMenu:AllOrderList[i].extractData().orderedMenu,
                    price:  AllOrderList[i].price,
                    
              }
              orderedList.push(tempOrderData);
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

  // basket : BasketOrder[] = [];

  // dataMap : DataStorage<BasketOrder> = new DataStorage<BasketOrder>()

  // constructor(private comm : CommunicationService, private dataCtrl: FoodtruckDataCtrl) {
  //   super();
  // }

  // get items(){
  //   return this.basket;
  // }

  // // makeTestdata(){
  // //   let ftId = Math.floor(Math.random() * 1000);
  // //   let menucount = Math.floor(Math.random() * 3) + 1;

  // //   for(let i = 0; i < menucount; i++){
  // //     let menuId = Math.floor(Math.random() * 1000);
  // //     let price = Math.floor(Math.random() * 80) * 100;
  // //     let ftdata : FoodtruckData = {
  // //       id: ftId,
  // //       name: ftId  + " foodtruck",
  // //       introduction: "test",
  // //       notice: ""
  // //     }
  // //       ftdata.waiting = {person: 3, time: 5};
  // //     let menudata : MenuData ={
  // //       id: menuId,
  // //       menuName: menuId + " menu",
  // //       price: price
  // //     };
  // //     let optiondata : OptionData = {
  // //       id: ftId + menuId,
  // //       name: ftId + menuId + " option",
  // //       extraPrice: 500
  // //     };
  
  // //     let amount = Math.floor(Math.random() * 2) + 1;
  // //     this.push(ftdata, menudata, optiondata, amount);
  // //   }
  // // }

  // pushId(foodtruckId : number, menuId: number, optionId: number, amount: number){
  //   let ft = this.dataCtrl.findFoodtruckById(foodtruckId);
  //   let menu = this.dataCtrl.findMenuById(foodtruckId, menuId);
  //   let option = this.dataCtrl.findOptionById(foodtruckId, menuId, optionId);
  //   this.push(ft, menu, option, amount);
  // }

  // push(foodtruck : FoodtruckData, menu: MenuData, option: OptionData, amount: number = 1){

  //   // const existIndex : number = this.basket.findIndex((value, index, obj) =>{
  //   //   return value.foodtruckInfo.id == foodtruck.id;
  //   // })
  //   console.log(this.dataMap.has(foodtruck.id))

  //   if(!this.dataMap.has(foodtruck.id)){
  //     //푸드트럭 첫 주문
      
  //     let newOrder : BasketOrder = new BasketOrder(this);

  //     let newOrderedMenu : BasketOrderedMenu = new BasketOrderedMenu(newOrder);
  //     newOrder.id = foodtruck.id
  //     newOrderedMenu.menuinfo = menu;
  //     newOrderedMenu.optioninfo = option;
  //     newOrderedMenu.amount = amount;


  //     newOrder.foodtruckInfo = foodtruck;
  //     newOrder.orderedMenu = [newOrderedMenu];

  //     this.basket.push(newOrder);
  //     this.dataMap.setData(newOrder);
  //     console.log(newOrder);
  //   }
  //   else{
  //     //이미 같은 푸드트럭의 주문이 있음
  //     // let existOrder : BasketOrder = this.basket[existIndex];
  //     let existOrder : BasketOrder = this.dataMap.getData(foodtruck.id);

  //     let newOrderedMenu : BasketOrderedMenu = new BasketOrderedMenu(existOrder);
  //     newOrderedMenu.menuinfo = menu;
  //     newOrderedMenu.optioninfo = option;
  //     newOrderedMenu.amount = amount;

  //     existOrder.orderedMenu.push(newOrderedMenu);
  //   }

  //   // console.log("menu pushed into basket");

  // }

  // get totalPrice(){
  //   let price : number = 0;

  //   for(let order of this.basket){
  //     price += order.price;
  //   }

  //   return price;
  // }

  // private classifyCheckedOrder() : [BasketOrder[], BasketOrder[]]{
  //   let checkedOrder : BasketOrder[] = [];
  //   let unCheckedOrder : BasketOrder[] = [];

  //   this.basket.forEach((val, index, arr)=>{
  //     if(val.value){
  //       let [remaining, extractOrder] = val.extractCheckedMenu();
  //       if(remaining){
  //         unCheckedOrder.push(val);
  //       }
  //       checkedOrder.push(extractOrder);
  //     }
      
  //   });

  //   this.toggle();

  //   return [checkedOrder, unCheckedOrder];
  // }

  // private orderListChanged(){
  //   this.basket.forEach((val, index, arr)=>{
  //     val.checkEmpty();
  //   })
  // }

  // private extractCheckedOrder() : BasketOrder[] {
  //   let [checked, unChecked] = this.classifyCheckedOrder();
  //   this.basket = unChecked;
  //   this.orderListChanged();
  //   this.value = true;
  //   return checked;
  // }

  // orderCheckedItem() : Promise<OrderData[]> {
  //   let checkedOrderList = this.extractCheckedOrder();
    
  //   return new Promise((resolve, reject) =>{
      
      
  //     let orderList : orderRequest[] = [];
  //     let orderDataList: OrderData[] = [];
  //     checkedOrderList.forEach((val, index, arr)=>{
  //       let orderinfo : OrderData = val.extractData();
  //       orderDataList.push(orderinfo);

  //       let order : orderRequest = {
  //         foodtruckId: orderinfo.foodtruckInfo.id,
  //         orderedMenu: [],
  //         price: orderinfo.price
  //       };
  //       orderinfo.orderedMenu.forEach((val)=>{
  //         order.orderedMenu.push({
  //           menuId: val.menuinfo.id,
  //           optionId: val.optioninfo.id,
  //           amount: val.amount
  //         });
  //       });
        
  //       orderList.push(order);
  //     });

  //     // orderList.forEach((val, index) =>{
  //     //   val.id = index;
  //     // });
      
  //     let req : reqOrder = {
  //       orderList : orderList
  //     };

  //     // let resExpect : resOrder = {
  //     //   orderList : orderList
  //     // };

  //     // this.dataCtrl.testRequest<resOrder>(reqType, req, true, resExpect, 1500)
  //     // .then(data =>{
  //     //   resolve(data.orderList);
  //     // }).catch(e =>{
  //     //   reject(e);
  //     // })

  //     this.comm.request<resOrder>(reqUrl.order, req).then(data =>{
  //       console.log(data);
  //       let orderedList : OrderData[] = [];
  //       data.orderList.forEach((val, index) =>{
  //         for(let i = index; i < orderDataList.length; i++){
  //           if(orderDataList[i].foodtruckInfo.id == val.foodtruckId){
  //             orderDataList[i].id = val.id;
  //             orderedList.push(orderDataList[i]);
  //             break;
  //           }
  //           else{
  //             // orderDataList.splice(i, 1);
  //           }
  //         }
  //       })
  //       resolve(orderedList);
  //     });
  //   });
  // }

}
