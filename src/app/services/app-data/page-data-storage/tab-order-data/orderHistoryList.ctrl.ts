import { OrderData } from 'src/app/data/order';
import { Storage } from '@ionic/storage';
import { OrderList } from 'src/app/component/order-cardview/orderList.component';
import { OrderHistoryData } from 'src/app/data/order-history';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { reqOrderHistory, resOrderHistory } from 'src/app/services/communication/reqType/account/orderHistory.req';
import { reqUrl } from 'src/app/services/communication/reqType/req-url.enum';

export class TabOrderHistoryListCtrl {

  orderhistoryList : OrderHistoryData[] = [];

  constructor(private dataCtrl: CommunicationService){

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

  getHistory() : void{
    let req : reqOrderHistory = {

    }

    this.dataCtrl.request<resOrderHistory>(reqUrl.orderHistory, req, false)
    .then(val =>{
      console.log("get history");
      this.orderhistoryList = val.historyList;
    })
    
  }


}