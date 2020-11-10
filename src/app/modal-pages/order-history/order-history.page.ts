import { Component, Input, OnInit } from '@angular/core';
import { OrderHistoryData } from 'src/app/data/order-history';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { DefaultValue } from 'src/environments/defaultValue';
import { OrderType } from 'src/app/component/order-cardview/order-type.enum';
import { HistoryDataCtrl } from 'src/app/services/data-ctrl/history.data.ctrl';

@Component({
  selector: 'modal-orderHistory',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {

  @Input() userId:number;
  orderHistoryDataList:OrderHistoryData[]=[];
  constructor(
    private historyCtrl: HistoryDataCtrl,
  ) { }
  ngOnInit() {

    //todo histroyProvider로 분리 
    this.historyCtrl.getHistory(this.userId).then(()=>{
      this.orderHistoryDataList=this.historyCtrl.orderhistoryList
    })
  }

  get orderHistoryData(){
    //console.log(`orderHistoryDataList: `, this.orderHistoryDataList)
    return this.orderHistoryDataList
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
