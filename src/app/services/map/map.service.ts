import { Injectable } from '@angular/core';
import { LocationDataToPoint, PointToLocationData } from './map.utility';
import { SharedDataService } from '../shared-data/shared-data.service';
import { LocationData } from 'src/app/data/location';

declare var kakao;

@Injectable()
export class MapService {
  map : any;
  positionCircle : any = null;
  constructor(private sharedData: SharedDataService) { }

  init(map: HTMLElement){
    this.mapLoad(map);
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
    return PointToLocationData(this.map.getPosition());
  }

  set mapPosition(location : LocationData){
    this.moveMapToLocation(location);
  } 

}
