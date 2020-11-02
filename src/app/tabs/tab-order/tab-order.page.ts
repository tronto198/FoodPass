import { Component, OnInit, ViewChild } from '@angular/core';
import { BasketOrder } from 'src/app/data/basket-data/basket-order';
import { OrderConformData } from 'src/app/data/order-confirm';
import { ConfirmDataCtrl } from 'src/app/services/data-ctrl/confirm.data.ctrl';
import { PageControllerService } from 'src/app/services/page-controller.service';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';

@Component({
  selector: 'app-tab-order',
  templateUrl: './tab-order.page.html',
  styleUrls: ['./tab-order.page.scss'],
})
export class TabOrderPage implements OnInit {

  // orderList : BasketOrder[];
  orderList : number[] = [];
  cookingList : OrderConformData[] = [];

  constructor(
    private config : SharedDataService,
    private pageCtrl : PageControllerService,//historyCtrl
  ) { }

  ngOnInit() {
    
    console.log("tab-order.page.ts  테스트중")

  }

  get isOpened() : boolean{
    return this.config.isFoodtruckOpen;
  }
  
  get admin() : boolean{
    return this.config.foodtruckOwner;
  }

  set admin(b : boolean){
    this.config.foodtruckOwner = b;
  }

  
  master(){
    this.admin = true;
    this.pageCtrl.presentFoodtruck();
  }

  isMaster(){
    return this.admin;
  }

}