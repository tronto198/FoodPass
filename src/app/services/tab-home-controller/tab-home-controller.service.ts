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
  order : OrderData;

  
  constructor() {
    this.locationData ={lat: 36.3504563333333, lng:127.38481833333333};
  }
  setLocation(){
  }
 getLocation() : object{
    return this.locationData;
  }

  push(){
    let order = {id: 1, name: "testname"};
    this.basket.push(order);
  }
}

