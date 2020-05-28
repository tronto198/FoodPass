import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationData } from 'src/app/data/location';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { TabHomeLocationCtrl } from 'src/app/services/app-data/page-data-storage/tab-home-data/location.ctrl';

// Kakao Map API
declare var kakao;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit {
  map: any;
  marker: any;

  position: any;
  coordinates:any;
  inputAddress: string;
  
  dataLocation: LocationData;   //불러온 위치 데이터
  newLocation: LocationData;    //새로 지정한 위치 데이터



  constructor(
    private geo: Geolocation,
    private modalCtrl : ModalController,
    private pageData: PageDataStorageService,
  ) { 
    this.dataLocation = this.pageCtrl.getLocation();
    this.newLocation = {lat: this.dataLocation.lat, lng:this.dataLocation.lng};
  }

  get pageCtrl() : TabHomeLocationCtrl {
    return this.pageData.tabHome.locationCtrl;
  }

  get getLatitude(){
    return " lat: "+this.newLocation.lat;
  }

  get getLongitude(){
    return " lng: "+this.newLocation.lng;
  }

  ngOnInit() {
    this.initPosition();
  }


  async initPosition() {
    var geoOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    try {
      this.coordinates = await this.geo.getCurrentPosition(geoOptions);
      this.getCurrentPosition();

    }catch{
    }
    this.makeMap();
  }

  makeMap(){
    this.position = new kakao.maps.LatLng(this.dataLocation.lat, this.dataLocation.lng);

    const mapOptions = {
      center: this.position,
      level: 3
    };
    this.map = new kakao.maps.Map(document.getElementById('map'), mapOptions);
    this.marker = new kakao.maps.Marker({  
      map: this.map, 
      draggable: true,
      position: this.position
  }); 
    this.displayMarker(this.position);
  }

  displayMarker(locPosition) {
    this.marker.setPosition(locPosition);
    kakao.maps.event.addListener(this.marker, 'dragend', () => {
      var latlng = this.marker.getPosition();
      this.newLocation.lat = latlng.getLat();
      this.newLocation.lng =latlng.getLng();
    });
    this.map.setCenter(locPosition);  
  }
  
  getCurrentPosition(){
    this.newLocation.lat = this.coordinates.coords.latitude;
    this.newLocation.lng = this.coordinates.coords.longitude;
    this.position = new kakao.maps.LatLng(this.newLocation.lat, this.newLocation.lng);
    this.displayMarker(this.position);
  }


  
  alertAddress(){
    alert(this.inputAddress);
  }

  dismissCancel(){
    this.pageCtrl.setLocation(this.dataLocation);
    //alert("dismissCancel");
    this.modalCtrl.dismiss();
  }

  dismissOK(){
    this.pageCtrl.setLocation(this.newLocation);
    //alert("dismissOK");
    this.modalCtrl.dismiss();
  }
}
