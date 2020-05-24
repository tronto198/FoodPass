import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { OrderType } from 'src/app/component/order-cardview/order-type.enum';
import { orderSlide } from 'src/app/services/app-data/page-data-storage/tab-order-data/tab-order-slide.enum';
import { PageControllerService } from 'src/app/services/app-data/page-controller/page-controller.service';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { TabHomeBasketCtrl } from 'src/app/services/app-data/page-data-storage/tab-home-data/basket.ctrl';
import { TabOrderWaitingListCtrl } from 'src/app/services/app-data/page-data-storage/tab-order-data/waitingList.ctrl';
import { OrderData } from 'src/app/data/order';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {

  private loading;
  constructor(
    private modalCtrl: ModalController,
    private PageCtrl : PageControllerService,
    private pageData : PageDataStorageService,
    private loadingCtrl : LoadingController,
  ) { }


  ngOnInit() {
    console.log("basketPage");
    this.basketCtrl.makeTestdata();
  }

  get basketCtrl() : TabHomeBasketCtrl {
    return this.pageData.tabHome.basketCtrl;
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

  get orderKeys(){
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
  get waitingOrderCtrl() : TabOrderWaitingListCtrl {
    return this.pageData.tabOrder.waitingCtrl;
  }

  

  dismiss(){
    this.modalCtrl.dismiss();
  }
  checkboxClicked(){
    this.basketCtrl.toggle();
  }

  async orderButtonClicked(){
    //서버통신부분
    //일단 바로 성공하는걸로 
    // this.orderSuccess();

    //2초후 성공
    this.loading = await this.loadingCtrl.create({
      message: '주문 요청 중입니다...',
    });
    this.loading.present();

    this.basketCtrl.orderCheckedItem().then((val) =>{
      this.orderSuccess(val);
    }).catch(e =>{
      console.log(e);
      //안됫다는 경고창 띄우기
      this.orderFailed();
    });
  }

  orderSuccess(orderDatas : OrderData[]){
    this.loading.dismiss();
    this.waitingOrderCtrl.addItemList(orderDatas);
    this.dismiss();
    this.PageCtrl.routingOrder(orderSlide.waitingOrder);
  }

  orderFailed(){

  }

}
