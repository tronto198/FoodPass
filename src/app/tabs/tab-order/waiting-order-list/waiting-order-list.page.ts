import { Component, OnInit } from '@angular/core';
import { OrderType } from 'src/app/component/order-cardview/order-type.enum';
import { OrderHistoryData } from 'src/app/data/order-history';
import { WaitingDataCtrl } from 'src/app/services/data-ctrl/waiting.data.ctrl';
import { HistoryDataCtrl } from 'src/app/services/data-ctrl/history.data.ctrl';
import {OrderData} from "../../../data/order";
import { OrderWaitingData } from 'src/app/data/order-wating';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';

@Component({
  selector: 'order-waiting-order-list',
  templateUrl: './waiting-order-list.page.html',
  styleUrls: ['./waiting-order-list.page.scss'],
})
export class WaitingOrderListPage implements OnInit {


  constructor(
    private waitingCtrl : WaitingDataCtrl,
    private historyCtrl : HistoryDataCtrl,
    private sharedData: SharedDataService,
  ) { }
  waitingList : OrderData[] = [];
  ngOnInit() {
    let userId=this.sharedData.account.myAccountId
    this.waitingCtrl.orderWating(userId).then(()=>{
      this.waitingList=this.waitingCtrl.orderList
     
    })
  }

  
  get orderList(){
    return this.waitingList 
  }
  // get orderList(){
  //   return this.waitingCtrl.OrderWatingList;
  // }

  get orderType(){
    return OrderType.waiting;
  }


  isEmpty(){
    return this.waitingCtrl.orderList.length == 0;
  }

  //수령 완료
  //이부분 사용 안되는듯
  orderPickedUp(index : number){
    console.log(index);
    this.waitingCtrl.orderReceived(index).then( ()=>{
      let order = this.waitingCtrl.removeItem(index);
      let history : OrderHistoryData ={
        id: order.id,
        price: order.price,
        foodtruckInfo: order.foodtruckInfo
      }
      this.historyCtrl.addItem(history);
      
    });
  }
}
