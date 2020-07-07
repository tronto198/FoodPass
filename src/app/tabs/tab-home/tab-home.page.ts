import { Component, OnInit, OnDestroy } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { LocationData } from 'src/app/data/location';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { PageControllerService } from 'src/app/services/app-data/page-controller/page-controller.service';
import { MapService } from 'src/app/services/map/map.service';

declare var kakao;

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss']
})
export class TabHomePage implements OnInit, OnDestroy {
  map : any;

  constructor(
    public modalCtrl : ModalController,
    private pageCtrl : PageControllerService,
    private pageData : PageDataStorageService,
    private sharedData : SharedDataService,
    private mapCtrl : MapService,
  ) { }

  ngOnInit() {
    console.log("tab-home");
    //css가 모두 적용된 이후에 맵을 로딩하기 위한 0.5초 지연실행
    setTimeout(() =>{
      this.mapCtrl.init(document.getElementById('map'));
    }, 500);
  }

  showFoodtruckList() {
    this.pageCtrl.presentFoodtruckList();
  }

  get isWatching(){
    return this.sharedData.geolocation.isWatching;
  }

  watchPosition(){
    if(this.isWatching){
      this.sharedData.geolocation.stopWatching();
    }
    else{
      this.sharedData.geolocation.watchLocation();
    }
  }

  ngOnDestroy(){
    this.sharedData.geolocation.stopWatching();
  }
}
