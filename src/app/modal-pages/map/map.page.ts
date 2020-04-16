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
    private geolocation: Geolocation,
    private modalCtrl : ModalController

  ) { 
    // 초기 값 (대전 시청)
    this.lat = 36.350456;
    this.lon = 127.384818;

    this.position = new kakao.maps.LatLng(this.lat, this.lon);
  }
  
  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;

      this.position = new kakao.maps.LatLng(this.lat, this.lon);

     }).catch((error) => {
       console.log('Error getting location', error);
     });

     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      this.lat =  data.coords.latitude
      this.lon = data.coords.longitude
     });

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
