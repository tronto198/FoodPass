import { Component, OnInit, Input, Optional } from '@angular/core';
import { OrderType } from './order-type.enum';
import { BasketControllerService } from 'src/app/services/basket-controller/basket-controller.service';
import { WaitingOrderControllerService } from 'src/app/services/waiting-order-controller/waiting-order-controller.service';
import { OrderControllerService } from './order-controller/order-controller.service';

@Component({
  selector: 'component-order-cardview',
  templateUrl: './order-cardview.component.html',
  styleUrls: ['./order-cardview.component.scss'],
})
export class OrderCardviewComponent implements OnInit {
  @Input() orderType : OrderType;
  @Input() orderIndex : number;

  constructor(
    @Optional() private basketCtrl : BasketControllerService,
    @Optional() private waitingCtrl : WaitingOrderControllerService,
    private orderCtrl : OrderControllerService,
  ) { }

  ngOnInit() {
    // console.log("orderType : " + this.orderType);
    // console.log(OrderType.basket);
    // switch (this.orderType){
    //   case OrderType.basket:
    //     this.orderCtrl.Controller = this.basketCtrl;
    //     break;

    //   case OrderType.waiting:
    //     this.orderCtrl.Controller = this.waitingCtrl;
    //     break;
      
    //   default:
    //     throw Error("invalid orderType");
    // }
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



  deleteMenu(index : number){
    this.orderCtrl.deleteMenu(this.orderIndex, index);
  }
}
