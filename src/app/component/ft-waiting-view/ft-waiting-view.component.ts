import { Component, OnInit, Input } from '@angular/core';

import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';
import { WaitingDataCtrl } from 'src/app/services/data-ctrl/waiting.data.ctrl';
import {OrderData} from "../../data/order";

@Component({
  selector: 'comp-ft-waiting-view',
  templateUrl: './ft-waiting-view.component.html',
  styleUrls: ['./ft-waiting-view.component.scss'],
})
export class FtWaitingViewComponent implements OnInit {
  @Input() waitingOrder: OrderData;

  front : boolean;
  s_map : boolean;


  get foodtruckId(){
    return this.waitingOrder.foodtruckId
  }

  get foodtruckInfo() {
    return this.waitingOrder.foodtruckInfo
  }
  get watingInfo(){
    return this.waitingCtrl.orderList
  }
  get name():string{
    return this.foodtruckInfo.name
  }
  // get watingNum():number{
  //   return this.watingInfo.
  // }
  ngOnInit() {
    this.front =true;
    this.s_map =true;
  }

  toggleFront(){
    this.front = !this.front;
  }

  isFront() : boolean{
    return this.front;
  }

  

  // isSMapLooking(): boolean{
  //   return this.s_map;
  // }

  // toggleSMap(){
  //   this.s_map = !this.s_map;
  // }

  static(){}
  // get foodtruckData(): FoodtruckData {
  //   return this.dataCtrl.findFoodtruckById(this.foodtruckId)
  // }

}
