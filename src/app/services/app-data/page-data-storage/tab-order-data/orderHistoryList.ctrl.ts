import { OrderData } from 'src/app/data/order';
import { Storage } from '@ionic/storage';
import { OrderList } from 'src/app/component/order-cardview/order-controller/order-list.interface';

export class TabOrderHistoryListCtrl implements OrderList {

  orderhistoryList : OrderData[] = [];

  constructor(
  ) {
    
  }


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