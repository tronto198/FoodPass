import { LocationData } from 'src/app/data/location';

export class TabHomeLocationCtrl {
    locationData: LocationData;
  
    constructor() {
      this.locationData ={lat: 36.3504563333333, lng:127.38481833333333};
    }
    setLocation(location){
      this.locationData = location;
    }
   getLocation() : LocationData{
      return this.locationData;
    }
  
}