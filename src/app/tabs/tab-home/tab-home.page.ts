import { Component, OnInit } from '@angular/core';


import { ToastController, ModalController } from '@ionic/angular';
import { ServerConnecterService } from '../../services/server-connecter/server-connecter.service';

import { MapComponent } from '../../../component/map/map.component';
import { BasketPage } from '../../modal-pages/basket/basket.page';
import { TabHomeControllerService } from 'src/app/services/tab-home-controller/tab-home-controller.service';
import { TabHomeControl } from 'src/app/services/tab-home-controller/tab-home-control';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss']
})
export class TabHomePage implements OnInit {
  location : string;
  basket : boolean;

  constructor(
    private toastController : ToastController,
    public modalController : ModalController,
    private serverConnecter : ServerConnecterService,
    public pageController : TabHomeControllerService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.location = "위치를 선택하세요";
    this.basket = false;
  }

  get isSearching(){
    return this.pageController.find;
  }

  get control() {
    return this.pageController.pageControl;
  }
  get mapPage() {
    return TabHomeControl.Map;
  }
  get foodtrcukListPage(){
    return TabHomeControl.FoodTruckList;
  }
  get foodtruckInfoPage(){
    return TabHomeControl.FoodTruckInfo;
  }
  get menuInfoPage(){
    return TabHomeControl.MenuInfo;
  }

  routingbt(){
    // this.basket = !this.basket;
    // this.router.navigateByUrl('/tabs/tab-home/foodtruckInfo/11');
    
  }

  onToolbarClicked(){
    this.modalController.create({
      component: MapComponent,
      cssClass: "modal-fullscreen"
    }
    ).then(s =>{
      s.present();
    });
  }

  onFabClicked(){
    // this.toast(text).then(() =>{
    //   console.log('test');
    //   //t는 toast의 객체인듯
    //   }
    // ).catch((e)=>{
    //   console.log('error: ' + e);
    // });
    
    // this.toast(text);

    this.modalController.create({
      component: BasketPage,
      cssClass: "modal-fullscreen"
    }
    ).then(s =>{
      s.present();
    });

  }

  async toast(message : string){
    const toast = await this.toastController.create({
      header: "new text pushed",
      message : message,
      duration: 2000,
      position: "bottom",
      buttons : [
        {
          side: 'start',
          icon: 'star',
        }
      ]

    });
    toast.present();
  }
  toastsync(message : string){
    const toast = this.toastController.create({
      header: "new text pushed",
      message : message,
      duration: 2000,
      position: "bottom",
      buttons : [
        {
          side: 'start',
          icon: 'star',
        }
      ]
    }).then((t)=>{
      t.present();
      console.log('toast presented');
    })
  }

  //todo: fab : 장바구니 가기
  //todo: 상단바 : 지도 가기
  //todo: 서비스 연결

  //todo: 여기에 남는거
  //1. fab버튼 -> modal 장바구니 페이지
  //2. 페이지 전환
}
