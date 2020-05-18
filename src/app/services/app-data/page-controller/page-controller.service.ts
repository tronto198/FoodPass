import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { orderSlide } from './tab-order-slide.enum';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';

@Injectable()
export class PageControllerService {

  home_currentFoodtruck : FoodtruckData;
  home_currentMenu : MenuData;

  orderSlideValue: orderSlide;

  constructor(
    private router : Router
  ) { }

  routingHome(foodtruckData? : FoodtruckData, menuData? : MenuData){

    let url = '/tabs/home';
    if(foodtruckData != null){
      url += `/foodtruck/${foodtruckData.id}`;
      this.home_currentFoodtruck = foodtruckData;
      if(menuData != null){
        url += `/menu/${menuData.menuID}`;
        this.home_currentMenu = menuData;
      }
    }

    this.router.navigateByUrl(url);

  }

  routingOrder(slideNo : orderSlide){
    this.orderSlideValue = slideNo;
    this.router.navigateByUrl(`/tabs/order`);
  }
}

