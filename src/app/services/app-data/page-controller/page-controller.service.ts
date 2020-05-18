import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { orderSlide } from './tab-order-slide.enum';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { PageDataStorageService } from '../page-data-storage/page-data-storage.service';

@Injectable()
export class PageControllerService {

  home_currentFoodtruck : FoodtruckData;
  home_currentMenu : MenuData;

  orderSlideValue: orderSlide;

  constructor(
    private router : Router,
    private pageData : PageDataStorageService,
  ) { }

  routingHome(foodtruckData? : FoodtruckData, menuData? : MenuData){

    let url = '/tabs/home';
    if(foodtruckData != null){
      url += `/foodtruck/${foodtruckData.id}`;
      this.pageData.tabHome.routeDataCtrl.currentFoodtruck = foodtruckData;
      if(menuData != null){
        url += `/menu/${menuData.menuID}`;
        this.pageData.tabHome.routeDataCtrl.currentMenu = menuData;
      }
    }

    this.router.navigateByUrl(url);

  }

  routingOrder(slideNo : orderSlide){
    this.orderSlideValue = slideNo;
    this.router.navigateByUrl(`/tabs/order`);
  }
}

