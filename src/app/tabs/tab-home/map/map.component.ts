import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FtViewComponent } from 'src/app/component/ft-view/ft-view.component';
import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';
import { FoodtruckDataProvider } from 'src/app/services/data-provider/foodtruck.data.provider';
import { MapService } from 'src/app/services/map/map.service';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';

@Component({
  selector: 'home-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  constructor(
    private mapCtrl : MapService,
    private foodtruckDataProvider: FoodtruckDataProvider,
    private ftDataCtrl: FoodtruckDataCtrl,
    private sharedData : SharedDataService,
    public modalCtrl : ModalController,
    ) { }

  ngOnInit() {
        //css가 모두 적용된 이후에 맵을 로딩하기 위한 지연실행
        setTimeout(() =>{
          this.mapCtrl.init(document.getElementById('map'));
          this.mapCtrl.setMapChangedHook(()=>{
            //푸드트럭 검색
            
            this.foodtruckSearch()
            
          })
          this.foodtruckSearch()
        }, 100);
  }


  foodtruckSearch(){
    this.foodtruckDataProvider.foodtruckListByLocation(this.mapCtrl.mapPosition).then(v =>{
      this.ftDataCtrl.currentFoodtrucks = v;
      this.ftDataCtrl.setFoodtruckData(...v);

      this.mapCtrl.clearPin();

        v.forEach((val) =>{
          this.mapCtrl.addFoodtruckPin(val, (id) =>{
            this.modalCtrl.create({
              component: FtViewComponent,
              componentProps: {
                foodtruckId: id
              },
              cssClass: "preview-modal"
            }).then(r =>{
              r.present()
            })
          });
        })
    })
  }

  get isWatching(){
    return this.sharedData.geolocation.isWatching;
  }

  watchPosition(){
    if(this.isWatching){
      this.sharedData.geolocation.stopWatching();
      this.mapCtrl.removePositionCircle();
    }
    else{
      this.sharedData.geolocation.getLocation().then(
        (location) =>{
          this.mapCtrl.makePositionCircle(this.sharedData.geolocation.currentLocation);
          this.mapCtrl.moveMapToLocation(this.sharedData.geolocation.currentLocation);
        }
      );
      this.sharedData.geolocation.watchLocation((location) =>{
        this.mapCtrl.movePositionCircleToLocation(location);
      });
    }
  }
}
