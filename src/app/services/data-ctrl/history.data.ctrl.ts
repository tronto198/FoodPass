import { OrderHistoryData } from 'src/app/data/order-history';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { reqOrderHistory, resOrderHistory } from 'src/app/services/communication/reqType/account/orderHistory.req';
import { reqUrl } from 'src/app/services/communication/reqType/req-url.enum';
import { Injectable } from '@angular/core';

@Injectable()
export class HistoryDataCtrl {

  orderhistoryList : OrderHistoryData[] = [];

  constructor(private communication: CommunicationService){

  }

  get orderList() : OrderHistoryData[] {
    return this.orderhistoryList;
  }
  get items(){
    return this.orderhistoryList;
  }

  get price(){
    return this.orderhistoryList;
  }

  remove(item: OrderHistoryData){
    this.orderhistoryList.splice(this.orderhistoryList.indexOf(item), 1);
  }

  removeItem(index: number){
    this.orderhistoryList.splice(index, 1);
  }

  addItem(item: OrderHistoryData){
    this.orderhistoryList.push(item);
  }

  addItemList(items: OrderHistoryData[]){
    this.orderhistoryList.push(...items);
  }
  getItem(index:number):OrderHistoryData{
    return this.orderhistoryList[index]
  }

  getHistory(id:number) :Promise<OrderHistoryData[]> {
    let req : reqOrderHistory = {
      id:id
    }
    return new Promise((resolve, reject)=>{
      this.communication.request<resOrderHistory>(reqUrl.orderHistory, req, false)
      .then(val =>{
        console.log("got history");
        this.orderhistoryList = val.historyList;

        if(this.orderhistoryList!=null){
          resolve(this.orderhistoryList)
        }else{
          reject("orderHistory 못가져옴")
        }
      })
    })
  }


}