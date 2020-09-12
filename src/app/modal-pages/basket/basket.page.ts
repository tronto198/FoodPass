import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { OrderType } from 'src/app/component/order-cardview/order-type.enum';
import { orderSlide } from 'src/app/services/app-data/page-data-storage/tab-order-data/tab-order-slide.enum';
import { PageControllerService } from 'src/app/services/page-controller.service';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { TabHomeBasketCtrl } from 'src/app/services/app-data/page-data-storage/tab-home-data/basket.ctrl';
import { TabOrderWaitingListCtrl } from 'src/app/services/app-data/page-data-storage/tab-order-data/waitingList.ctrl';
import { OrderData } from 'src/app/data/order';
import { NotificationService } from 'src/app/services/notification.service';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { BasketDataCtrl } from 'src/app/services/data-ctrl/basket.data.ctrl';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {

  // private loading;
  constructor(
    // private modalCtrl: ModalController,
    // private PageCtrl : PageControllerService,
    // private pageData : PageDataStorageService,
    // private loadingCtrl : LoadingController,
    // private push : NotificationService,
    // private bskCtrl : BasketDataCtrl
  ) { }


  ngOnInit() {
    console.log("basketPage");
    //  this.basketCtrl.makeTestdata();
  }

  // get basketCtrl() : TabHomeBasketCtrl {
  //   return this.pageData.tabHome.basketCtrl;
  // }

  // get totalPrice(){
  //   return this.basketCtrl.totalPrice;
  // }

  // get checkValue(){
  //   return this.basketCtrl.checkValue;
  // }
  // set checkValue(checked: boolean){
  //   this.basketCtrl.value = checked;
  // }
  // get indeterminated(){
  //   return this.basketCtrl.indeterminate;
  // }

  // get basket(){
  //   return this.basketCtrl.basket;
  // }

  // get orderType(){
  //   return OrderType.basket;
  // }

  // get isEmpty(){
  //   //장바구니가 비었을때
  //   return this.basketCtrl.basket.length == 0;
  // }

  // get orderEnable(){
  //   //주문하기 버튼의 활성화 여부 지정
  //   return this.isEmpty || this.totalPrice == 0;
  // }
  // get waitingOrderCtrl() : TabOrderWaitingListCtrl {
  //   return this.pageData.tabOrder.waitingCtrl;
  // }

  

  // dismiss(){
  //   this.modalCtrl.dismiss();
  // }
  // checkboxClicked(){
  //   this.basketCtrl.toggle();
  // }

  // orderButtonClicked(){

  //   if(!this.push.isGranted){
  //     alert('주문이 완료되면 푸시 알림을 보내기 위해 권한이 필요합니다.');
  //   }
  //   this.push.init((token) =>{
  //     this.order();
  //   });
  // }

  // private order() {
  //   this.basketCtrl.orderCheckedItem().then((val) =>{
  //     this.orderSuccess(val);
  //   }).catch(e =>{
  //     console.log(e);
  //     //안됫다는 경고창 띄우기
  //     this.orderFailed();
  //   });
  // }

  // private orderSuccess(orderDatas : OrderData[]){
  //   // this.loading.dismiss();
  //   this.waitingOrderCtrl.addItemList(orderDatas);
  //   this.dismiss();
  //   this.PageCtrl.routingOrder(orderSlide.waitingOrder);
  // }

  // private orderFailed(){
  //   alert('주문이 처리되지 않았습니다.');
  // }

  addButtonClicked(){
    // this.bskCtrl.setBasketData();

}
   get basket(){
    // this.bskCtrl.setBasketData();
    // return this.bskCtrl.getBasketList();
    return 0;
  }
  get isEmpty_false(){
      //장바구니가 비었을때
      // return this.basketCtrl.basket.length == 0;
      return false;
    }

  get isEmpty_true(){
    //장바구니가 비었을때
    // return this.basketCtrl.basket.length == 0;
    return true;
  }


}
