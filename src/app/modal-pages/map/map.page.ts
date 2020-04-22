import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationData } from 'src/app/data/location';

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

  message: any;
  infowindow: any;
  location: LocationData;
  @Input() loc: Object;
  
  constructor(
    private geo: Geolocation,
    private modalCtrl : ModalController,
    navParams : NavParams
  ) { 
    this.location =navParams.get('loc');
    alert("lat: "+this.location.lat +"\n"+"lng: "+ this.location.lng);
  }
  
  ngOnInit() {
    this.getCurrentPosition();
  }

  displayMarker(locPosition, message) {
    const marker = new kakao.maps.Marker({  
        map: this.map, 
        draggable: true,
        position: locPosition
    }); 
    kakao.maps.event.addListener(marker, 'dragend', () => {
      var latlng = marker.getPosition();
      this.location.lat = latlng.getLat();
      this.location.lng =latlng.getLng();

  });
    this.map.setCenter(locPosition);  

  }

  async getCurrentPosition() {
    var geoOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    const coordinates = await this.geo.getCurrentPosition(geoOptions);
    this.location.lat = coordinates.coords.latitude;
    this.location.lng = coordinates.coords.longitude;
    this.position = new kakao.maps.LatLng(this.location.lat, this.location.lng);

    const mapOptions = {
      center: this.position,
      level: 3
    };
    this.map = new kakao.maps.Map(document.getElementById('map'), mapOptions);
    this.message = '<div style="padding:5px;">현재 위치</div>';
    this.displayMarker(this.position, this.message);
  }

  get getLatitude(){
    return "lat : "+this.location.lat;
  }

  get getLongitude(){
    return "lng : "+this.location.lng;
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
