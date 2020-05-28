import { OrderData } from 'src/app/data/order';
import { Storage } from '@ionic/storage';
import { OrderList } from 'src/app/component/order-cardview/orderList.component';
import { DataControllerService } from '../../data-controller/data-controller.service';
import { reqOrderHistory, resOrderHistory } from '../../data-controller/reqType/orderHistory.req';

export class TabOrderHistoryListCtrl implements OrderList {

  orderhistoryList : OrderData[] = [];

  constructor(private dataCtrl: DataControllerService){

  }

  get orderList() : OrderData[] {
    return this.orderhistoryList;
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

  getHistory() : void{
    let req : reqOrderHistory = {

    }
    let res : resOrderHistory = {
      history: []
    };
    
  }


}