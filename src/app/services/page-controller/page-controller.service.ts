import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { orderSlide } from './tab-order-slide.enum';

@Injectable({
  providedIn: 'root'
})
export class PageControllerService {

  orderSlideValue: orderSlide;
  constructor(
    private router : Router
  ) { }

  routingHome(foodtruckId? : number, menuId? : number){

    let url = '/tabs/home';
    if(foodtruckId != null){
      url += `/foodtruck/${foodtruckId}`;
      if(menuId != null){
        url += `/menu/${menuId}`;
      }
    }

    this.router.navigateByUrl(url);

  }

  routingOrder(slideNo : orderSlide){
    this.orderSlideValue = slideNo;
    this.router.navigateByUrl(`/tabs/order`);
  }
}
