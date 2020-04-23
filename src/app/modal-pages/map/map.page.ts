import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationData } from 'src/app/data/location';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

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

  geocoder: any;
  location: LocationData;
  options: NativeGeocoderOptions;
  //사용 안하면 삭제
  //@Input() loc: object;
  
  constructor(
    private geo: Geolocation,
    private modalCtrl : ModalController,
    private nativeGeocoder: NativeGeocoder,
    navParams : NavParams
  ) { 
    this.options = {
      useLocale: true,
      maxResults: 5
  };
    this.location =navParams.get('loc');
    alert("lat: "+this.location.lat +"\n"+"lng: "+ this.location.lng);
}

  ngOnInit() {
    this.getCurrentPosition();
  }

  // getGeocoder(){
  //   this.geocoder = new kakao.maps.services.Geocoder();
  //   this.geocoder.coord2Address(this.location.lat, this.location.lng, (result, status) =>{
  //           if (status === kakao.maps.services.Status.OK) {
  //               var detailAddr = !!result[0].road_address ? '도로명주소 : ' + result[0].road_address.address_name + '' : '';
  //               detailAddr += '지번 주소 : ' + result[0].address.address_name;
  //                           alert(detailAddr);
      
  //           }   
  //       });
  // }

  getGeocoderfromLatLng(){
    this.nativeGeocoder.reverseGeocode(this.location.lat,this.location.lng, this.options)
    .then((result: NativeGeocoderResult[]) => alert(JSON.stringify(result[0])))
    .catch((error: any) => alert(error));
  }
   getLatLngfromGeocoder(){
    this.nativeGeocoder.forwardGeocode('Berlin', this.options)
      .then((result: NativeGeocoderResult[]) => alert('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude))
      .catch((error: any) => console.log(error));
  }

  displayMarker(locPosition) {
    const marker = new kakao.maps.Marker({  
        map: this.map, 
        draggable: true,
        position: locPosition
    }); 
    kakao.maps.event.addListener(marker, 'dragend', () => {
      var latlng = marker.getPosition();
      this.location.lat = latlng.getLat();
      this.location.lng =latlng.getLng();
      //this.getGeocoder();
      //this.getGeocoderfromLatLng();

    });
    this.map.setCenter(locPosition);  
  }
//4-1, 4-3
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
    this.displayMarker(this.position);
  }

  get getLatitude(){
    return "lat : "+this.location.lat;
  }

  get getLongitude(){
    return "lng : "+this.location.lng;
  }
//4-2
  dismiss(){
    this.modalCtrl.dismiss();
  }
  dismissWithLoc(){
    this.modalCtrl.dismiss(this.location);
  }
}
