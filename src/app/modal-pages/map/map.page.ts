import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationData } from 'src/app/data/location';
import { TabHomeControllerService } from 'src/app/services/tab-home-controller/tab-home-controller.service';
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

  position: any;
  inputAddress: string;

  dataLocation: LocationData;
  newLocation: LocationData;
  nowLocation: LocationData;

  constructor(
    private geo: Geolocation,
    private modalCtrl : ModalController,
    // private pageCtrl: TabHomeControllerService,
    private pageData: PageDataStorageService,
  ) { 
    this.dataLocation = this.pageCtrl.getLocation();
    this.newLocation = {lat: this.dataLocation.lat, lng:this.dataLocation.lng};
    this.nowLocation ={lat: this.dataLocation.lat, lng:this.dataLocation.lng};
    alert("lat: "+this.dataLocation.lat +"\n"+"lng: "+ this.dataLocation.lng);
}

get pageCtrl() : TabHomeLocationCtrl {
  return this.pageData.tabHome.locationCtrl;
}

  ngOnInit() {
    this.getCurrentPosition();
  }
getInputAddress(){
  alert(this.inputAddress);
}
  displayMarker(locPosition) {
    const marker = new kakao.maps.Marker({  
        map: this.map, 
        draggable: true,
        position: locPosition
    }); 
    kakao.maps.event.addListener(marker, 'dragend', () => {
      var latlng = marker.getPosition();
      this.newLocation.lat = latlng.getLat();
      this.newLocation.lng =latlng.getLng();
    });
    this.map.setCenter(locPosition);  
  }
  
  getNowLocation(){
    this.newLocation.lat = this.nowLocation.lat;
    this.newLocation.lng =this.nowLocation.lng;
    this.position = new kakao.maps.LatLng(this.newLocation.lat, this.newLocation.lng);
    this.displayMarker(this.position);
  }

  async getCurrentPosition() {
    var geoOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    const coordinates = await this.geo.getCurrentPosition(geoOptions)
    //.then(()=>{
    //   alert("getCurrentPosition = true");
    // }).catch(()=>{
    //   alert("getCurrentPosition = false");
    // });
    this.nowLocation.lat = coordinates.coords.latitude;
    this.nowLocation.lng = coordinates.coords.longitude;
    this.makeMap();
  }
  makeMap(){
    this.position = new kakao.maps.LatLng(this.dataLocation.lat, this.dataLocation.lng);

    const mapOptions = {
      center: this.position,
      level: 3
    };
    this.map = new kakao.maps.Map(document.getElementById('map'), mapOptions);
    this.displayMarker(this.position);
  }

  get getLatitude(){
    return " lat: "+this.newLocation.lat;
  }

  get getLongitude(){
    return " lng: "+this.newLocation.lng;
  }

  dismissCancel(){
    this.pageCtrl.setLocation(this.dataLocation);
    alert("dismissCancel");
    this.modalCtrl.dismiss();
  }

  dismissOK(){
    this.pageCtrl.setLocation(this.newLocation);
    alert("dismissOK");
    this.modalCtrl.dismiss();
  }
}
