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
    private sharedData : SharedDataService,
    private confirmData:ConfirmDataCtrl
  ) { }

  ngOnInit() {
    // this.pageData.tabOrder.historyCtrl.getHistory();
    // this.orderList = [1,2,3];
    // this.cookingList = [1,2];
    // this.basket = [
    //   {
    //   id: 1,
    //   foodtruckinfo: {
    //     id: 10011,
    //     name: "master",
    //     introduction: "운영자용 수정 푸드트럭",
    //     notice: "수정 공지"
    //   },
    //   orderedMenu: {
    //     menuinfo:{
    //       id:1,
    //       menuName:"메뉴 이름"
    //     },
    //     optioninfo: {id: 1,
    //       name: "옵션 이름",
    //       extraPrice: 0},
    //     amount: 1}}]

  }

  get isOpened() : boolean{
    return this.sharedData.isFoodtruckOpen;
  }
  confirm(){
    if(this.isOpened==true){
      this.confirmData.cookingItem().then(val=>{
        console.log(`요리해야할 목록을 성공적으로 가져왔습니다.`)
        this.cookingList=val
      }).catch(error=>{
        console.log(error);
        console.log(`요리해야할 목록이 보이지 않습니다.`)
      })
    }
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