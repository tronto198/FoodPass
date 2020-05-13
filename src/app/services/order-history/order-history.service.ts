import { Injectable } from '@angular/core';
import { OrderData } from 'src/app/data/order';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  private orderList : OrderData[] = [];

  constructor(
    private st : Storage
  ) {
    
    this.st.get('orderList').then(val =>{
      this.orderList = val;
    });
  }

  load() : OrderData[] {
    return this.orderList;
  }

  save(order : OrderData){

    this.orderList.push(order);
    this.st.set('orderList', this.orderList);
  }
}
