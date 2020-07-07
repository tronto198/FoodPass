import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { LocationData } from 'src/app/data/location';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { PageControllerService } from 'src/app/services/app-data/page-controller/page-controller.service';

declare var kakao;

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss']
})
export class TabHomePage implements OnInit {
  map : any;

  constructor(
    public modalCtrl : ModalController,
    private pageCtrl : PageControllerService,
    private pageData : PageDataStorageService,
    private sharedData : SharedDataService,
  ) { }

  ngOnInit() {
    console.log("tab-home");
    //css가 모두 적용된 이후에 맵을 로딩하기 위한 0.5초 지연실행
    setTimeout(() =>{
      this.mapLoad();
    }, 500);
  }

  //LocationData를 카카오 api에서 쓰는 형태로 변환
  private locationDataToPoint(location: LocationData) : any{
    return new kakao.maps.LatLng(location.lat, location.lng);
  }

  //마커를 만들고 맵에 표시
  private makeMarker(location: LocationData) : any{
    let marker = new kakao.maps.Marker({
      map: this.map,
      position: this.locationDataToPoint(location)
    });
    return marker;
  }

  //id가 'map'인 요소에 카카오맵 api를 이용하여 맵 로딩
  private mapLoad(){
    //대전 시청의 위치 정보를 카카오에서 쓰는 형식으로 변환
    let sampleLocation = this.locationDataToPoint(this.sharedData.geolocation.currentLocation);
    const mapOptions = {
      center: sampleLocation,
      level: 3,
      draggable: true
    };

    //id가 'map'인 요소를 가져와 카카오맵 로딩
    this.map = new kakao.maps.Map(document.getElementById('map'), mapOptions);
  }


  showFoodtruckList() {
    this.pageCtrl.presentFoodtruckList();
  }
}
