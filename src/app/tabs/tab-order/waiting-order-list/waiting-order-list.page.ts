import { Component, OnInit } from '@angular/core';
import { WaitingOrderControllerService } from 'src/app/services/waiting-order-controller/waiting-order-controller.service';

@Component({
  selector: 'order-waiting-order-list',
  templateUrl: './waiting-order-list.page.html',
  styleUrls: ['./waiting-order-list.page.scss'],
})
export class WaitingOrderListPage implements OnInit {

  constructor(
    private waitingOrderCtrl: WaitingOrderControllerService
  ) { }

  ngOnInit() {
  }

  get orderList(){
    return this.waitingOrderCtrl.orderList;
  }

}
