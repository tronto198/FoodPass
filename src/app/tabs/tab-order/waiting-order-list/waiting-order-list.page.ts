import { Component, OnInit } from '@angular/core';
import { OrderType } from 'src/app/component/order-cardview/order-type.enum';
import { OrderHistoryData } from 'src/app/data/order-history';
import { WaitingDataCtrl } from 'src/app/services/data-ctrl/waiting.data.ctrl';
import { HistoryDataCtrl } from 'src/app/services/data-ctrl/history.data.ctrl';

@Component({
  selector: 'order-waiting-order-list',
  templateUrl: './waiting-order-list.page.html',
  styleUrls: ['./waiting-order-list.page.scss'],
})
export class WaitingOrderListPage implements OnInit {


  constructor(
    private waitingCtrl : WaitingDataCtrl,
    private historyCtrl : HistoryDataCtrl,
  ) { }

  ngOnInit() {
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
      let history : OrderHistoryData ={
        id: order.id,
        price: order.price,
        foodtruckInfo: order.foodtruckinfo
      }
      this.historyCtrl.addItem(history);
      
    });
  }
}
