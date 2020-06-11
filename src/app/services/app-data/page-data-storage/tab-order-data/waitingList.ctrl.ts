import { OrderData } from 'src/app/data/order';
import { DataControllerService } from '../../data-controller/data-controller.service';
import { reqUrl } from '../../data-controller/reqType/req-url.enum';
import { resolve } from 'url';
import { OrderList } from 'src/app/component/order-cardview/orderList.component';

export class TabOrderWaitingListCtrl implements OrderList{
  waitingList : OrderData[] = [];

  constructor(private dataCtrl : DataControllerService) {
    
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

  orderReceived(index : number) : Promise<void>{
    
    //서버에 전송
    return new Promise((resolve, reject) =>{
      this.dataCtrl.testRequest(reqUrl.orderReceived, this.items[index], true
        , null, 333).then(val =>{
          resolve();
        })
        .catch(e =>{
          reject();
        });
    });
    
  }

}
