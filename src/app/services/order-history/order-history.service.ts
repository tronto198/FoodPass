import { Injectable } from '@angular/core';
import { OrderData } from 'src/app/data/order';
import { Storage } from '@ionic/storage';
import { OrderList } from 'src/app/component/order-cardview/order-controller/order-list.interface';

// @Injectable({
//   providedIn: 'root'
// })
export class OrderHistoryService {

  orderhistoryList : OrderData[] = [];

  constructor(
    private st : Storage
  ) {
    
    // this.load();
  }

  load() : void {
    this.st.get('orderList').then(val =>{
      this.orderhistoryList = val;
      if(this.orderhistoryList == null){
        this.orderhistoryList = [];
      }      
    });
  }

  save(order : OrderData){

    this.orderhistoryList.push(order);
    this.st.set('orderList', this.orderhistoryList);
  }

  // get isEmpty(){
  //   return this.orderhistoryList.length == 0;
  // }

  get items(){
    return this.orderhistoryList;
  }

  get price(){
    return this.orderhistoryList;
  }

  remove(item: OrderData){
    this.orderhistoryList.splice(this.orderhistoryList.indexOf(item), 1);
  }

  removeItem(index: number){
    this.orderhistoryList.splice(index, 1);
  }

  addItem(item: OrderData){
    this.orderhistoryList.push(item);
  }

  addItemList(items: OrderData[]){
    this.orderhistoryList.push(...items);
  }

  get orderList() : OrderData[] {
    return this.orderhistoryList;
  }
}
