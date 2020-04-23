import { Injectable } from '@angular/core';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { OrderData } from 'src/app/data/order';

@Injectable()
export class TabHomeControllerService {
  foodtruckData: FoodtruckData;
  test: string;
  order : OrderData;

  
  constructor() {
    
  }
}

