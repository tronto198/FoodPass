import { Injectable } from '@angular/core';
import { LocationDataToPoint, PointToLocationData } from './map.utility';
import { SharedDataService } from '../shared-data/shared-data.service';
import { LocationData } from 'src/app/data/location';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { PageControllerService } from '../page-controller.service';

declare var kakao;

@Injectable()
export class MapService {
  map : any;
  positionCircle : any = null;
  private hook : () => void = () => {};
  private FoodtruckPins : PinData<any>[] = [];

  constructor(
    private sharedData: SharedDataService,
    private pageCtrl: PageControllerService,
    ) { }

  init(map: HTMLElement){
    this.mapLoad(map);

    kakao.maps.event.addListener(this.map, 'idle', ()=>{
      this.hook();
    })
  }

  
  //id가 'map'인 요소에 카카오맵 api를 이용하여 맵 로딩
  private mapLoad(map: any){
    let sampleLocation = LocationDataToPoint(this.sharedData.geolocation.currentLocation);
    const mapOptions = {
      center: sampleLocation,
      level: 3,
      draggable: true
    };

    //id가 'map'인 요소를 가져와 카카오맵 로딩
    this.map = new kakao.maps.Map(map, mapOptions);
  }

  makePositionCircle(location: LocationData){
    if(this.positionCircle != null){
      this.positionCircle.setMap(this.map);
      return;
    }
    this.positionCircle = new kakao.maps.CustomOverlay({
      map: this.map,
      content: '<span class="dot"></span>',
      position: LocationDataToPoint(location),
      zIndex: 2
  });
  }

  movePositionCircleToLocation(location: LocationData) : any{
    if(this.positionCircle == null)
      return;
    this.positionCircle.setPosition(LocationDataToPoint(location));
  }

  makeMarker(location: LocationData) : any{
    let marker = new kakao.maps.Marker({
      map: this.map,
      position: LocationDataToPoint(location)
    });
    return marker;
  }

  moveMapToLocation(point : LocationData){
    this.map.setCenter(LocationDataToPoint(point));
  }

  get mapPosition() : LocationData {
    return PointToLocationData(this.map.getCenter());
  }

  set mapPosition(location : LocationData){
    this.moveMapToLocation(location);
  } 

  setMapChangedHook(func : () => void){
    this.hook = func;
  }

  clearHook(){
    this.hook = () =>{};
  }

  private addPin(location: LocationData){
    let pin = new kakao.maps.Marker({
      map: this.map,
      position: LocationDataToPoint(location),

    });
    this.FoodtruckPins.push({pin: pin, data: null});
    return pin;
  }


  addFoodtruckPin(foodtruckData: FoodtruckData){
    //핀 만들기
    let pin = this.addPin(foodtruckData.location);
    
    //title 추가
    pin.setTitle(foodtruckData.name);
    //클릭이벤트 추가
    pin.setClickable(true);
    kakao.maps.event.addListener(pin, 'click', ()=>{
      this.pageCtrl.presentFoodtruck(foodtruckData);
    })
    
  }

  clearPin(){
    //모든 핀 제거
    this.FoodtruckPins.forEach((val) => val.pin.setMap(null));
    this.FoodtruckPins = [];
  }

}


interface PinData<T> {
  pin: any;
  data: T;
}