import { Component, OnInit } from '@angular/core';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { TabOrderHistoryListCtrl } from 'src/app/services/app-data/page-data-storage/tab-order-data/orderHistoryList.ctrl';
import { OrderType } from 'src/app/component/order-cardview/order-type.enum';

@Component({
  selector: 'order-order-history-list',
  templateUrl: './order-history-list.page.html',
  styleUrls: ['./order-history-list.page.scss'],
})
export class OrderHistoryListPage implements OnInit {

  constructor(
    private pageData: PageDataStorageService,
  ) { }

  ngOnInit() {
     
  }

  get historyCtrl() : TabOrderHistoryListCtrl {
    return this.pageData.tabOrder.historyCtrl;
  }

  get orderList(){
    // console.log("history : ", this.historyCtrl.orderList);
    return this.historyCtrl.orderList;
  }

  isEmpty(){
    return this.historyCtrl.orderList.length == 0;
  }
  
  get orderType(){
    return OrderType.history;
  }

  giveRating(index : number){
    
  }
  
}
