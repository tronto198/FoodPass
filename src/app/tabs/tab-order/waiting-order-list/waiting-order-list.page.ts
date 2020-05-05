import { Component, OnInit } from '@angular/core';
import { WaitingOrderControllerService } from 'src/app/services/waiting-order-controller/waiting-order-controller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'order-waiting-order-list',
  templateUrl: './waiting-order-list.page.html',
  styleUrls: ['./waiting-order-list.page.scss'],
})
export class WaitingOrderListPage implements OnInit {


  constructor(
    private waitingOrderCtrl: WaitingOrderControllerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  get orderList(){
    return this.waitingOrderCtrl.orderList;
  }

  isEmpty(){
    return this.waitingOrderCtrl.orderList.length == 0;
  }

  gotoFoodtruckInfo(foodtruckId: number){
    this.router.navigateByUrl(`/tabs/home/foodtruck/${foodtruckId}`);
  }

  //수령 완료
  orderPickedUp(){
    
  }
}
