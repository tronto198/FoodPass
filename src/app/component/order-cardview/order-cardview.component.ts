import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { OrderType } from './order-type.enum';
import { TabHomeBasketCtrl } from 'src/app/services/app-data/page-data-storage/tab-home-data/basket.ctrl';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { TabOrderWaitingListCtrl } from 'src/app/services/app-data/page-data-storage/tab-order-data/waitingList.ctrl';
import { TabOrderHistoryListCtrl } from 'src/app/services/app-data/page-data-storage/tab-order-data/orderHistoryList.ctrl';
import { orderListComponent } from './orderList.component';

@Component({
  selector: 'component-order-cardview',
  templateUrl: './order-cardview.component.html',
  styleUrls: ['./order-cardview.component.scss'],
})
export class OrderCardviewComponent extends orderListComponent implements OnInit {
  @Input() orderType : OrderType;
  @Input() orderIndex : number;
  @Output() received = new EventEmitter<number>();

  constructor(
    pageData : PageDataStorageService,
  ) {
    super(pageData);
  }


  ngOnInit() {
    // this.orderCtrl.Type = this.orderType;
  }

  get order(){
    return this.orderList[this.orderIndex];
  }

  get menuList(){
    return this.order.orderedMenu;
  }


  orderReceived(){
    //받앗어요
    //외부에서 처리할것 todo
    console.log(`receivedOrder : ${this.orderIndex}`);
    this.received.emit(this.orderIndex);
    // this.historyCtrl.addItem(this.order);
    // this.orderCtrl.removeOrder(this.orderIndex);
  }

  deleteMenu(index : number){
    this.removeMenu(this.orderIndex, index);
  }
}
