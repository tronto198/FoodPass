import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { OrderType } from 'src/app/component/order-cardview/order-type.enum';
import { PageControllerService } from 'src/app/services/page-controller.service';
import { OrderData } from 'src/app/data/order';
import { NotificationService } from 'src/app/services/notification.service';
import { BasketDataCtrl } from 'src/app/services/data-ctrl/basket.data.ctrl';
import { WaitingDataCtrl } from 'src/app/services/data-ctrl/waiting.data.ctrl';
import { BasketOrder } from 'src/app/data/basket-data/basket-order';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {
  // private loading;
  constructor(
    private modalCtrl: ModalController,
    private PageCtrl : PageControllerService,
    private basketCtrl : BasketDataCtrl,
    private loadingCtrl : LoadingController,
    private push : NotificationService,
    private waitingCtrl : WaitingDataCtrl
  ) { }


  ngOnInit() {
    console.log("basketPage");
    // this.basketCtrl.makeTestdata();
  }

  get totalPrice(){
    return this.basketCtrl.totalPrice;
  }

  get checkValue(){
    return this.basketCtrl.checkValue;
  }
  set checkValue(checked: boolean){
    this.basketCtrl.value = checked;
  }
  get indeterminated(){
    return this.basketCtrl.indeterminate;
  }

  get basket() : BasketOrder[] {
    return this.basketCtrl.basket;
  }

  get orderType(){
    return OrderType.basket;
  }

  get isEmpty(){
    //장바구니가 비었을때
    return this.basketCtrl.basket.length == 0;
  }

  get orderEnable(){
    //주문하기 버튼의 활성화 여부 지정
    return this.isEmpty || this.totalPrice == 0;
  }

  

  dismiss(){
    this.modalCtrl.dismiss();
  }
  checkboxClicked(){
    this.basketCtrl.toggle();
  }

  orderButtonClicked(){

    if(!this.push.isGranted){
      alert('주문이 완료되면 푸시 알림을 보내기 위해 권한이 필요합니다.');
    }
    this.push.init((token) =>{
      this.order();
    });
  }

  //이부분 dataprovider 만들기
  private order() {
    this.basketCtrl.orderCheckedItem().then((val) =>{
      this.orderSuccess(val);
    }).catch(e =>{
      console.log(e);
      //안됫다는 경고창 띄우기
      this.orderFailed();
    });
  }

  private orderSuccess(orderDatas : OrderData[]){
    // this.loading.dismiss();
    this.waitingCtrl.addItemList(orderDatas);
    this.dismiss();
    this.PageCtrl.routingOrder();
  }

  private orderFailed(){
    alert('주문이 처리되지 않았습니다.');
  }

  addButtonClicked(){
    // this.bskCtrl.setBasketData();

}
  
  // get isEmpty_false(){
  //     //장바구니가 비었을때
  //     // return this.basketCtrl.basket.length == 0;
  //     return false;
  //   }






}
