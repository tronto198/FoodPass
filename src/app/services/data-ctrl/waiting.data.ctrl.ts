import { OrderData } from 'src/app/data/order';
import { Injectable } from '@angular/core';
import { CommunicationService } from '../communication/communication.service';
import { OrderHistoryData } from 'src/app/data/order-history';
import { resOrderReceived } from '../communication/reqType/order/orderReceived.req';
import { reqUrl } from '../communication/reqType/req-url.enum';
import { reqOrderWating , resOrderWating} from '../communication/reqType/order/orderWating.req';
import { reqOrder } from '../communication/reqType/order/order.req';
import { OrderWatingData } from 'src/app/data/order-wating';
import { FoodtruckDataCtrl } from './foodtruck.data.ctrl';
import {DataStorage} from "./data.storage";

@Injectable()
export class WaitingDataCtrl{
  waitingList : OrderData[] = [];
  watingData:OrderData;

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
    return this.waitingList;
  }

  orderWating(id:number):Promise<OrderData[]>{
    let req:reqOrderWating={
      userId:id
    }
    return new Promise((resolve, reject)=>{
      this.communication.request<resOrderWating>(reqUrl.orderWating, req, false)
      .then(val=>{
        console.log(`주문대기화면`)

        val.orderData.forEach(element=>{
            element.foodtruckInfo=this.dataCtrl.findFoodtruckById(element.foodtruckId)
            
        })
        this.waitingList=val.orderData
        if(this.waitingList!=null){
          resolve(this.waitingList)
        }else{
          reject("주문 대기 화면 못가져옴")
        }
        
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
    return new Promise<OrderHistoryData>((resolve => {
      this.communication.request<resOrderReceived>(reqUrl.orderReceived, item).then(value =>{
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
