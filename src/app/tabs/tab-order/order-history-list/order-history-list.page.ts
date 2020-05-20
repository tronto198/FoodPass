import { Component, OnInit } from '@angular/core';
import { OrderHistoryService } from 'src/app/services/order-history/order-history.service';
import { OrderType } from 'src/app/component/order-cardview/order-type.enum';

@Component({
  selector: 'order-order-history-list',
  templateUrl: './order-history-list.page.html',
  styleUrls: ['./order-history-list.page.scss'],
})
export class OrderHistoryListPage implements OnInit {

  constructor(
    private historyCtrl : OrderHistoryService
  ) { }

  ngOnInit() {
     this.historyCtrl.load();
  }

  get orderList(){
    return this.historyCtrl.orderList;
  }

  isEmpty(){
    return this.historyCtrl.orderList.length == 0;
  }
  
  get orderType(){
    return OrderType.history;
  }
  
}
