import { Component, OnInit, Input, Optional } from '@angular/core';
import { OrderType } from './order-type.enum';
import { BasketControllerService } from 'src/app/tabs/tab-home/basket-controller/basket-controller.service';
import { WaitingOrderControllerService } from 'src/app/services/waiting-order-controller/waiting-order-controller.service';
import { OrderControllerService } from './order-controller/order-controller.service';
import { OrderHistoryService } from 'src/app/services/order-history/order-history.service';
import { TabHomeBasket } from 'src/app/services/app-data/page-data-storage/tab-home-data/basket.data';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';

@Component({
  selector: 'component-order-cardview',
  templateUrl: './order-cardview.component.html',
  styleUrls: ['./order-cardview.component.scss'],
})
export class OrderCardviewComponent implements OnInit {
  @Input() orderType : OrderType;
  @Input() orderIndex : number;

  constructor(
    // @Optional() private basketCtrl : BasketControllerService,
    @Optional() private waitingCtrl : WaitingOrderControllerService,
    private orderCtrl : OrderControllerService,
    private historyCtrl : OrderHistoryService,
    private pageData : PageDataStorageService,
  ) { }

  get basketCtrl() : TabHomeBasket {
    return this.pageData.tabHome.basketCtrl;
  }

  ngOnInit() {
    this.orderCtrl.Type = this.orderType;
    if(this.orderType == OrderType.basket){
      this.orderCtrl.Controller = this.basketCtrl;
    }
    else if(this.orderType == OrderType.waiting){
      this.orderCtrl.Controller = this.waitingCtrl;
    }
    else{
      throw Error("invalid orderType");
    }
  }

  get order(){
    return this.orderCtrl.items[this.orderIndex];
  }

  get menuList(){
    return this.order.orderedMenu;
  }

  isBasket(){
    return this.orderType == OrderType.basket;
  }

  isWaiting(){
    return this.orderType == OrderType.waiting;
  }


  orderReceived(){
    //받앗어요
    let order = this.order;
    this.orderCtrl.removeOrder(this.orderIndex);
    this.historyCtrl.save(order);
  }

  deleteMenu(index : number){
    this.orderCtrl.removeMenu(this.orderIndex, index);
  }
}
