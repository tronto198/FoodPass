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

  marker: any;
  message: any;
  infowindow: any;
  
  constructor(
    private geo: Geolocation,
    private modalCtrl : ModalController,

  ) { 
    this.lat = 36.350456;
    this.lon = 127.384818;
  }
  
  ngOnInit() {
    this.getCurrentPosition();
  }

  displayMarker(locPosition, message) {
    this.marker = new kakao.maps.Marker({  
        map: this.map, 
        draggable: true,
        position: locPosition
    }); 
    this.map.setCenter(locPosition);  
  }
  
  show(mouseEvent){
    alert("Ohhhhhhh");

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

    kakao.maps.event.addListener(this.map, 'click', function(mouseEvent) {
      alert(mouseEvent.latLng instanceof kakao.maps.LatLng); // true
  });
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
