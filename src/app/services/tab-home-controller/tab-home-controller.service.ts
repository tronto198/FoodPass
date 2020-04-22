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
    
  }
  // getLocation(){
  //   this.locationData.lat=36.12415;
  //   this.locationData.lng=127.242356;

  // }

  push(){
    let order = {id: 1, name: "testname"};
    this.basket.push(order);
  }
}

