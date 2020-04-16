import { Component, Input, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

// Kakao Map API
declare var kakao;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit {
  map: any;

  position: any;
  lat: any;
  lon: any;

  message: any;

  constructor(
    private modalCtrl : ModalController
  ) { 
    // 초기 값 (대전 시청)
    this.lat = 36.350456;
    this.lon = 127.384818;
    this.getCurrentPosition();
  }
  
  ngOnInit() {

    this.watchPosition();
    this.position = new kakao.maps.LatLng(this.lat, this.lon);

    setTimeout(() => {
      const mapOptions = {
        center: this.position,
        level: 3
      };
          
      this.map = new kakao.maps.Map(document.getElementById('map'), mapOptions);
      this.message = '<div style="padding:5px;">현재 위치</div>';
      this.displayMarker(this.position, this.message);
    
    }, 300);
  }
  //Component 상태변화에 반응하여 호출
  ngDoCheck(){
    this.watchPosition();
    this.position = new kakao.maps.LatLng(this.lat, this.lon);
    this.displayMarker(this.position, this.message);
  }

  displayMarker(locPosition, message) {
    // 마커 생성
    var marker = new kakao.maps.Marker({  
        map: this.map, 
        position: locPosition
    }); 
    //인포윈도우 내용
    var iwContent = message,
        iwRemoveable = true;
    //인포윈도우 생성
    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });
    
    infowindow.open(this.map, marker);
    this.map.setCenter(locPosition);     
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.lat = coordinates.coords.latitude.toFixed(6);
    this.lon = coordinates.coords.longitude.toFixed(6);
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {
    })
  }

  get getLatitude(){
    return "lat : "+this.lat;
  }

  get getLongitude(){
    return "lon : "+this.lon;
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}