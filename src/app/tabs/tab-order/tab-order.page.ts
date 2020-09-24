import { Component, OnInit, ViewChild } from '@angular/core';
import { PageControllerService } from 'src/app/services/page-controller.service';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';

@Component({
  selector: 'app-tab-order',
  templateUrl: './tab-order.page.html',
  styleUrls: ['./tab-order.page.scss'],
})
export class TabOrderPage implements OnInit {
  owner : boolean

  constructor(
    private config : SharedDataService,
    private pageCtrl : PageControllerService,//historyCtrl
  ) { }

  ngOnInit() {
    // this.pageData.tabOrder.historyCtrl.getHistory();
    this.owner = true;
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