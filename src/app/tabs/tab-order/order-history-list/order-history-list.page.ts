import { Component, OnInit } from '@angular/core';
import { OrderHistoryService } from 'src/app/services/order-history/order-history.service';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { TabOrderHistoryList } from 'src/app/services/app-data/page-data-storage/tab-order-data/orderHistoryList.data';

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

  get historyCtrl() : TabOrderHistoryList {
    return this.pageData.tabOrder.historyCtrl;
  }

  get orderList(){
    return this.historyCtrl.orderList;
  }

  get isEmpty(){
    return this.historyCtrl.isEmpty;
  }
  
}
