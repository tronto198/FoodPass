import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class PageControllerService {

  constructor(
    private router : Router,
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

  routingOrder(){
    this.router.navigateByUrl(`/tabs/order`);
  }

  presentBasket(){
    this.router.navigateByUrl(`/basket`);
  }

}

