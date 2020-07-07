import { Injectable } from '@angular/core';
import { locationDataToPoint } from './map.utility';
import { SharedDataService } from '../shared-data/shared-data.service';
import { LocationData } from 'src/app/data/location';

declare var kakao;

@Injectable()
export class MapService {
  map : any;
  constructor(private sharedData: SharedDataService) { }

  init(map: HTMLElement){
    this.mapLoad(map);
  }

  
  //id가 'map'인 요소에 카카오맵 api를 이용하여 맵 로딩
  private mapLoad(map: any){
    let sampleLocation = locationDataToPoint(this.sharedData.geolocation.currentLocation);
    const mapOptions = {
      center: sampleLocation,
      level: 3,
      draggable: true
    };

    //id가 'map'인 요소를 가져와 카카오맵 로딩
    this.map = new kakao.maps.Map(map, mapOptions);
  }

  makeMarker(location: LocationData) : any{
    let marker = new kakao.maps.Marker({
      map: this.map,
      position: locationDataToPoint(location)
    });
    return marker;
  }

}
