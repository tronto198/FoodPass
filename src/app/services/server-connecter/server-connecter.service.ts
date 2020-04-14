import { Injectable } from '@angular/core';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { FoodtruckInfoPage } from 'src/app/tabs/tab-home/foodtruck-info/foodtruck-info.page';

@Injectable({
  providedIn: 'root'
})
export class ServerConnecterService {
  FoodtruckDummyData: FoodtruckData[] = [];
  MenuDummyData: MenuData[] = [];

  constructor() { }

  getFoodtruckData() : FoodtruckData[]{
    this.FoodtruckDummyData.push({id: 15, name: "test foodtruckDummy 15"});
    this.FoodtruckDummyData.push({id: 16, name: "test foodtruckDummy 16"});
    this.FoodtruckDummyData.push({id: 17, name: "test foodtruckDummy 17"});
    return this.FoodtruckDummyData;
  }

  getMenuData(foodtruckid: number) : MenuData[]{
    this.MenuDummyData.push({id: foodtruckid, name: "dummy Menu 111"});
    this.MenuDummyData.push({id: foodtruckid, name: "dummy Menu 112"});
    this.MenuDummyData.push({id: foodtruckid, name: "dummy Menu 115"});
    return this.MenuDummyData;
  }
}
