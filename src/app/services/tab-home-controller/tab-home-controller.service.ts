import { Injectable } from '@angular/core';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { OrderData } from 'src/app/data/order';
import { LocationData } from 'src/app/data/location';

@Injectable()
export class TabHomeControllerService {
  foodtruckData: FoodtruckData;
  locationData: LocationData;
  basket: OrderData[] = [];
  test: string;
  
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

