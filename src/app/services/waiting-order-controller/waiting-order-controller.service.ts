import { Injectable } from '@angular/core';
import { OrderData } from 'src/app/data/order';

@Injectable({
  providedIn: 'root'
})
export class WaitingOrderControllerService {
  private waitingOrderList : OrderData[];

  constructor() { }

  removeItem(item: OrderData){
    this.waitingOrderList.splice(this.waitingOrderList.indexOf(item), 1);
  }

  addItem(item: OrderData){
    this.waitingOrderList.push(item);
  }

  addItemList(items: OrderData[]){
    this.waitingOrderList.push(...items);
  }

  get orderList(){
    return this.waitingOrderList;
  }
}
