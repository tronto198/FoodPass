import { Injectable } from '@angular/core';
import { OrderData } from 'src/app/data/order';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  orderIdList : number[];

  constructor(
    private st : Storage
  ) {
    
    
   }

  save(order : OrderData){

    //orderID 순으로 저장
    //각 오더 아이디를 이용해서 다른 정보들 로딩
    // this.st.set('name', order.foodtruckinfo.name);

    // this.st.get('name').then(val =>{
    //   console.log(val);
    // });

    this.st.set('test', order).then(val =>{
      this.st.get('test').then(val =>{
        console.log(val);
      });
    });
  }
}
