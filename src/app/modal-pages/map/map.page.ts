import { Component, Input, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

// kakao map API
declare var kakao;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit {

  position: any;
  map: any;

  constructor(

    private modalCtrl : ModalController
  ) { }

  ngOnInit() {
    this.position = new kakao.maps.LatLng(36.350456, 127.384818)
    //지연 후 한번에 그려서 표시 
      setTimeout(() => {
        const mapOptions = {
          center: this.position,
          level: 3
        };
          
        this.map = new kakao.maps.Map(document.getElementById('map'), mapOptions);

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
        
            // var lat = position.coords.latitude, // 위도
            //     lon = position.coords.longitude; // 경도
            
            // var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            //     message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
            
            // 마커와 인포윈도우를 표시합니다
            //this.displayMarker(locPosition, message);
                
          });
        }
    
      }, 300);
  }

  // displayMarker(locPosition, message) {

  //   // 마커를 생성합니다
  //   var marker = new kakao.maps.Marker({  
  //       map: this.map, 
  //       position: locPosition
  //   }); 
    
  //   var iwContent = message, // 인포윈도우에 표시할 내용
  //       iwRemoveable = true;

  //   // 인포윈도우를 생성합니다
  //   var infowindow = new kakao.maps.InfoWindow({
  //       content : iwContent,
  //       removable : iwRemoveable
  //   });
    
  //   // 인포윈도우를 마커위에 표시합니다 
  //   infowindow.open(this.map, marker);
    
  //   // 지도 중심좌표를 접속위치로 변경합니다
  //   this.map.setCenter(locPosition);     
  // }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
