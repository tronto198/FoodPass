import { OrderData } from 'src/app/data/order';
import { Injectable } from '@angular/core';
import { CommunicationService } from '../communication/communication.service';
import { OrderHistoryData } from 'src/app/data/order-history';
import { resOrderReceived } from '../communication/reqType/order/orderReceived.req';
import { reqUrl } from '../communication/reqType/req-url.enum';
import { reqOrderWaiting , resOrderWaiting} from '../communication/reqType/order/orderWating.req';
import { reqOrder } from '../communication/reqType/order/order.req';
import { OrderWaitingData} from 'src/app/data/order-wating';
import { FoodtruckDataCtrl } from './foodtruck.data.ctrl';
import {DataStorage} from "./data.storage";
import { OrderedMenuData } from 'src/app/data/ordered-menu';
import { reqOrderReady, resOrderReady } from '../communication/reqType/order/orderReady.req';

@Injectable()
export class WaitingDataCtrl{
  waitingList : OrderData[] = [];
  orderDataList:OrderData[]=[];

  constructor(
    private communication : CommunicationService,
    private dataCtrl:FoodtruckDataCtrl
    ) {}

  get items(){
    return this.waitingList;
  }

  get price(){
    return this.waitingList;
  }

  remove(item: OrderData){
    this.waitingList.splice(this.waitingList.indexOf(item), 1);
  }

  removeItem(index: number) : OrderData{
    return this.waitingList.splice(index, 1)[0];
  }

  addItem(item: OrderData){
    this.waitingList.push(item);
  }

  addItemList(items: OrderData[]){
    this.waitingList.push(...items);
  }

  get orderList() : OrderData[] {
    return this.orderDataList;
  }

  orderWating(id:number):Promise<OrderData[]>{
    let req:reqOrderWaiting={
      userId:id
    }
    return new Promise((resolve, reject)=>{
      this.communication.request<resOrderWaiting>(reqUrl.orderWating, req, false)
      
      .then(val=>{
        //console.log(`주문대기화면`)
        
        val.orderWaitingList.forEach(element=>{
            element.foodtruckInfo=this.dataCtrl.findFoodtruckById(element.foodtruckId)

            let orderData:OrderData={
              id:element.id,
              foodtruckId:element.foodtruckId,
              foodtruckInfo:element.foodtruckInfo,
              orderedMenu:[],
              price:element.price,
              orderNo:element.orderNo,
              
            }
            element.orderedMenu.forEach(el=>{
              let orderMenu:OrderedMenuData={
                menuinfo:this.dataCtrl.findMenuById(element.foodtruckId, el.menuId),
                optioninfo:this.dataCtrl.findOptionById(element.foodtruckId, el.menuId, el.optionId),
                amount:el.amount
              }
              orderData.orderedMenu.push(orderMenu)
            })
           
            this.orderDataList.push(orderData)
        })
       
        if(this.orderDataList!=null){
          resolve(this.orderDataList)
        }else{
          reject("주문 대기 화면 못가져옴")
        }
        
      })
    })
  }

  orderReady(userOrderMenuId:number, foodtruckId: number){
    let req:reqOrderReady={
      orderId:userOrderMenuId,
      foodtruckId:foodtruckId
    }
    return new Promise((resolve, reject)=>{
      this.communication.request<resOrderReady>(reqUrl.orderCall, req, true)
      .then(val=>{
        console.log(`${userOrderMenuId} 주문번호 손님 호출함`)
        resolve();
      }).catch(error=>{
        reject();
      })
    })

  }

  orderReceived(index : number) : Promise<OrderHistoryData>{
    
    //서버에 전송
    return new Promise((resolve, reject) =>{
      this.communication.request<resOrderReceived>(reqUrl.orderReceived, this.items[index], true)
      .then(val =>{
        console.log(`${index} 주문 수령완료, 주문 끝남 `)
          resolve();
        })
        .catch(e =>{
          reject();
        });
    });
    
  }

  orderReceive(item: OrderData) : Promise<OrderHistoryData> {
    let req={
      orderId:item.id
    }
    return new Promise<OrderHistoryData>((resolve => {
      this.communication.request<resOrderReceived>(reqUrl.orderReceived, req).then(value =>{
        this.remove(item)

        let history : OrderHistoryData = {
          id: item.id,
          price: item.price,
          foodtruckInfo: item.foodtruckInfo
        }
        resolve(history)
      })
    }))
  }

}
