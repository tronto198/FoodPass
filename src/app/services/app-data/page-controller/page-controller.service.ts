import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { orderSlide } from '../page-data-storage/tab-order-data/tab-order-slide.enum';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { PageDataStorageService } from '../page-data-storage/page-data-storage.service';

@Injectable()
export class PageControllerService {
  orderSlideValue: orderSlide;

  constructor(
    private router : Router,
    private pageData : PageDataStorageService,
  ) { }

  presentFoodtruck(foodtruckData? : FoodtruckData, menuData? : MenuData){
    let url = '/foodtruck';

    if(foodtruckData != null){
      url += `/${String(foodtruckData.id)}`;
      this.pageData.modal.foodtruckInfoCtrl.currentFoodtruck = foodtruckData;
      if(menuData != null){
        url += `/${String(menuData.menuID)}`;
        this.pageData.modal.foodtruckInfoCtrl.currentMenu = menuData;
      }
    }
    this.router.navigateByUrl(url);

  }

  presentOrderHistory(){
    this.router.navigateByUrl('/history');
  }

  presentFoodtruckList(){
    this.router.navigateByUrl('/foodtruckList');
  }


  routingHome(){
    let url = '/tabs/home';
    this.router.navigateByUrl(url);
  }

  routingOrder(slideNo : orderSlide){
    this.router.navigateByUrl(`/tabs/order`);
  }

}

