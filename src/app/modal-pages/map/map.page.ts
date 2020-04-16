import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';


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
    private geo: Geolocation,
    private modalCtrl : ModalController

  ) { 
    // 초기 값 (대전 시청)
    this.lat = 36.350456;
    this.lon = 127.384818;
  }
  
  ngOnInit() {
    this.getCurrentPosition();
  }

  displayMarker(locPosition, message) {
    // 마커 생성
    var marker = new kakao.maps.Marker({  
        map: this.map, 
        position: locPosition
    }); 
    // //인포윈도우 내용
    // var iwContent = message,
    //     iwRemoveable = true;
    // //인포윈도우 생성
    // var infowindow = new kakao.maps.InfoWindow({
    //     content : iwContent,
    //     removable : iwRemoveable
    // });
    
    // infowindow.open(this.map, marker);
    marker.setDraggable(true);
    this.map.setCenter(locPosition);     
  }

  async getCurrentPosition() {
    var geoOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    const coordinates = await this.geo.getCurrentPosition(geoOptions);
    this.lat = coordinates.coords.latitude;
    this.lon = coordinates.coords.longitude;
    this.position = new kakao.maps.LatLng(this.lat, this.lon);
    const mapOptions = {
      center: this.position,
      level: 3
    };
    this.map = new kakao.maps.Map(document.getElementById('map'), mapOptions);
    this.message = '<div style="padding:5px;">현재 위치</div>';
    this.displayMarker(this.position, this.message);
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
