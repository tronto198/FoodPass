import { Component, OnInit, Input } from '@angular/core';
import { WaitingOrderControllerService } from 'src/app/services/waiting-order-controller/waiting-order-controller.service';
import { OrderType } from 'src/app/component/order-cardview/order-type.enum';

@Component({
  selector: 'waiting-order-cardview',
  templateUrl: './order-cardview.component.html',
  styleUrls: ['./order-cardview.component.scss'],
})
export class OrderCardviewComponent22 implements OnInit {
  @Input() orderIndex : number;

  constructor(
    private waitingorderCtrl : WaitingOrderControllerService
  ) { }

  ngOnInit() {}

  get order(){
    return this.waitingorderCtrl.orderList[this.orderIndex];
  }

  get foodtruckInfo(){
    return this.order.foodtruckinfo;
  }

  get orderedMenuList(){
    return this.order.orderedMenu;
  }

  get menuType(){
    return OrderType.waiting;
  }
}
