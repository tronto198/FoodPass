import { Component, OnInit } from '@angular/core';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { TabOrderHistoryListCtrl } from 'src/app/services/app-data/page-data-storage/tab-order-data/orderHistoryList.ctrl';
import { OrderHistoryData } from 'src/app/data/order-history';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { DefaultValue } from 'src/environments/defaultValue';
import { OrderType } from 'src/app/component/order-cardview/order-type.enum';

@Component({
  selector: 'modal-orderHistory',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {


  constructor(
    private pageData: PageDataStorageService,
  ) { }

  ngOnInit() {
    //  this.historyCtrl.getHistory();
  }

  get historyCtrl() : TabOrderHistoryListCtrl {
    return this.pageData.tabOrder.historyCtrl;
  }

  get orderList() : OrderHistoryData[]{
    return this.historyCtrl.orderList;
  }

  foodtruckImage(data: FoodtruckData) : string{
    return data.imgSrc? data.imgSrc : DefaultValue.foodtruckImgSrc;
  }

  isEmpty(){
    return this.historyCtrl.orderList.length == 0;
  }
  
  get orderType(){
    return OrderType.history;
  }

  giveRating(index : number){
    
  }
}
