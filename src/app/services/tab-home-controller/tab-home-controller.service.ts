import { Injectable } from '@angular/core';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { OrderData } from 'src/app/data/order';

@Injectable()
export class TabHomeControllerService {
  foodtruckData: FoodtruckData;
  basket: OrderData[] = [];
  test: string;
  order : OrderData;

  
  constructor() {
    
  }

  push(){
    let order = {id: 1, name: "testname"};
    this.basket.push(order);
  }
}

