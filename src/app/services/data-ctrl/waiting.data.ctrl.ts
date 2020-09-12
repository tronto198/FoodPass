import { OrderData } from 'src/app/data/order';
import { Injectable } from '@angular/core';
import { CommunicationService } from '../communication/communication.service';
import { OrderHistoryData } from 'src/app/data/order-history';
import { resOrderReceived } from '../communication/reqType/order/orderReceived.req';
import { reqUrl } from '../communication/reqType/req-url.enum';

@Injectable()
export class WaitingDataCtrl{
  waitingList : OrderData[] = [];

  constructor(private communication : CommunicationService) {
    
  }

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

  orderReceived(index : number) : Promise<OrderHistoryData>{
    
    //서버에 전송
    return new Promise((resolve, reject) =>{
      this.communication.request<resOrderReceived>(reqUrl.orderReceived, this.items[index], true)
      .then(val =>{
          resolve(null);
        })
        .catch(e =>{
          reject();
        });
    });
    
  }

}
