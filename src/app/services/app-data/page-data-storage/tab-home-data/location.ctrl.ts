import { LocationData } from 'src/app/data/location';

export class TabHomeLocationCtrl {
    locationData: LocationData;
  
    constructor() {
      this.locationData ={lat: 37.566761, lng:126.9786527};
    }
    setLocation(location){
      this.locationData = location;
    }
   getLocation() : LocationData{
      return this.locationData;
    }
  
}