import { Component, OnInit } from '@angular/core';
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
  orderHistoryData : OrderHistoryData[]

  constructor(
    private historyCtrl: HistoryDataCtrl,
  ) { }
  // todo historyCtrl 만들기

  ngOnInit() {
    //  this.historyCtrl.getHistory();
    this.orderHistoryData = [{
      id: 1,
    foodtruckInfo: {
      id: 10011,
      name: "master",
      introduction: "운영자용 수정 푸드트럭",
      notice: "수정 공지"
    },
    price: 10000
    },
    {
      id: 2,
    foodtruckInfo: {
      id: 10011,
      name: "master",
      introduction: "운영자용 수정 푸드트럭",
      notice: "수정 공지"
    },
    price: 10000
    }];

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
