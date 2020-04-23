import { Injectable } from '@angular/core';
import { OrderData } from 'src/app/data/order';

@Injectable({
  providedIn: 'root'
})
export class BasketControllerService {
  allCheck : boolean;
  indeterminate : boolean;
  basket : OrderData[] = [];
  totalPrice : number;

  constructor() {
    this.allCheck = true;
    this.indeterminate = false;

    
  }

  testdata(){
    
  }

  push(order : OrderData){
    order['check'] = true;
    order['indeterminate'] = true;
    this.basket.push(order);
  }
}
