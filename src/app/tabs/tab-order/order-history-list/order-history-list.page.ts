import { Component, OnInit } from '@angular/core';
import { OrderHistoryService } from 'src/app/services/order-history/order-history.service';
import { OrderData } from 'src/app/data/order';

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

  get isEmpty(){
    return this.historyCtrl.isEmpty;
  }
}
