import { Injectable } from '@angular/core';
import { FoodtruckData } from 'src/app/data/foodtruck';

@Injectable()
export class TabHomeControllerService {
  foodtruckData: FoodtruckData;
  test: string;

  constructor() {
  }
}

