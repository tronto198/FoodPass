import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { OrderType } from 'src/app/component/order-cardview/order-type.enum';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { TabOrderWaitingListCtrl } from 'src/app/services/app-data/page-data-storage/tab-order-data/waitingList.ctrl';

@Component({
  selector: 'order-waiting-order-list',
  templateUrl: './waiting-order-list.page.html',
  styleUrls: ['./waiting-order-list.page.scss'],
})
export class WaitingOrderListPage implements OnInit {


  constructor(
    private pageData: PageDataStorageService,
    private cd : ChangeDetectorRef,
  ) { }

  ngOnInit() {
  }

  get waitingCtrl() : TabOrderWaitingListCtrl{
    return this.pageData.tabOrder.waitingCtrl;
  }

  get orderList(){
    // console.log('waiting : ', this.waitingCtrl.orderList);
    return this.waitingCtrl.orderList;
  }

  get orderType(){
    return OrderType.waiting;
  }


  isEmpty(){
    return this.waitingCtrl.orderList.length == 0;
  }

  // gotoFoodtruckInfo(foodtruckId: number){
  //   this.router.navigateByUrl(`/tabs/home/foodtruck/${foodtruckId}`);
  // }

  //수령 완료
  orderPickedUp(index : number){
    console.log(index);
    this.waitingCtrl.orderReceived(index).then( ()=>{
      let order = this.waitingCtrl.removeItem(index);
      this.pageData.tabOrder.historyCtrl.addItem(order);
      // this.cd.detectChanges();
    });
  }
}
