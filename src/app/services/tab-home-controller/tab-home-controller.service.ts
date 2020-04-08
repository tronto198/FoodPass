import { Injectable } from '@angular/core';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { TabHomeControl } from './tab-home-control';

@Injectable()
export class TabHomeControllerService {
  find: boolean;
  pageControl: TabHomeControl;
  foodtruckData: FoodtruckData;

  constructor() {
    this.pageControl = TabHomeControl.FoodTruckList;
  }
}

