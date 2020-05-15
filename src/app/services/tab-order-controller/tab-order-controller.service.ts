import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { orderSlide } from './tab-order.enum';


@Injectable({
  providedIn: 'root'
})
export class TabOrderControllerService {
  pageValue: orderSlide;

  constructor(
    private router : Router
  ) {
   }

  init(){ 
  }

  routing(slideNo : orderSlide){
    this.pageValue = slideNo;
    this.router.navigateByUrl(`/tabs/order`);
  }

}
