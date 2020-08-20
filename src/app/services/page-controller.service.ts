import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { orderSlide } from './app-data/page-data-storage/tab-order-data/tab-order-slide.enum';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { PageDataStorageService } from './app-data/page-data-storage/page-data-storage.service';

@Injectable()
export class PageControllerService {
  orderSlideValue: orderSlide;

  constructor(
    private router : Router,
    private pageData : PageDataStorageService,
  ) { }

  presentFoodtruck(foodtruckId? : number, menuId? : number){
    let url = '/foodtruck';

    if(foodtruckId != null){
      url += `/${String(foodtruckId)}`;
      if(menuId != null){
        url += `/${String(menuId)}`;
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

  presentSearch(){
    this.router.navigateByUrl(`/search`);
  }


  routingHome(){
    let url = '/tabs/home';
    this.router.navigateByUrl(url);
  }

  routingOrder(slideNo : orderSlide){
    this.router.navigateByUrl(`/tabs/order`);
  }

  presentBasket(){
    this.router.navigateByUrl(`/basket`);
  }

}

