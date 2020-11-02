import { Component, OnInit, OnDestroy } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { PageControllerService } from 'src/app/services/page-controller.service';
import { SearchService } from 'src/app/services/search.service';
import { SearchPage } from 'src/app/modal-pages/search/search.page';
import { TabOrderPage } from '../tab-order/tab-order.page';
import { ConfirmDataCtrl } from 'src/app/services/data-ctrl/confirm.data.ctrl';

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss']
})
export class TabHomePage implements OnInit, OnDestroy {
  b : boolean;
  tabOrderPage= new TabOrderPage(this.sharedData, this.pageCtrl, this.confirm)
  constructor(
    public modalCtrl : ModalController,
    private pageCtrl : PageControllerService,
    private sharedData : SharedDataService,
    private search: SearchService,
    private confirm:ConfirmDataCtrl
  ) { }

  ngOnInit() {
    console.log("tab-home");
    this.isOpened = false;
  }

  set isOpened(b : boolean) {
      this.sharedData.isFoodtruckOpen = b;
  }

  get isOpened() : boolean{
    return this.sharedData.isFoodtruckOpen;
  }

  get isOwner(){
    return this.sharedData.foodtruckOwner;
  }

  toggleOpen(){
    if(this.isOwner){
      this.isOpened = !this.isOpened;
    }else{
      alert("푸드트럭이 등록되어있지 않습니다.")
    }
    if(this.isOpened) {
      this.sharedData.open();
      this.tabOrderPage.confirm()
    }
    else this.sharedData.close();
  }

  get openedFoodtruckText(){
    if(this.isOpened){
      return "운영 종료 하기"
    }
    else{
      return "내 푸드트럭 운영 하기"
    }
  }

  
  get inputData(){
    return this.search.inputData;
  }
  set inputData(val){
    this.search.inputData = val;
  }

  get currentSearched(){
    return this.search.currentSearched;
  }

  showFoodtruckList() {
    this.pageCtrl.presentFoodtruckList();
  }

  searchStart(){
    this.modalCtrl.create({
      component: SearchPage,
      cssClass: 'modal-fullscreen'
    }).then(r => r.present())
  }

  ngOnDestroy(){
    this.sharedData.geolocation.stopWatching();
  }
}
