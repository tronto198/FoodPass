
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
 // private orderNumList:Array<number>=new Array<number>(999);
 
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


  clear(){
    this.orderedFoodtruckIdList = []
    this.dataStorage = new DataStorage<BasketOrder>()
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

  // orderNo(foodtruckId:number):number{
  //   let key=foodtruckId-1001;
  //   let value=this.orderNumList[key];
  //   value++;
  //   if(value>100){
  //     value=1;
  //   }
  //   this.orderNumList[key]=value;
  //   return value;
  // }



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
          price: orderinfo.price,
         // orderNo:this.orderNo(orderinfo.foodtruckInfo.id)
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
              orderedList.push(AllOrderList[i].extractData());
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
