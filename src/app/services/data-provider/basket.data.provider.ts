
import { Injectable } from '@angular/core';
import { ADataProvider } from './data.provider.abstract';
import { BasketOrder } from 'src/app/data/basket-data/basket-order';
import { reqOrder, resOrder } from '../communication/reqType/order/order.req';

@Injectable()
export class BasketDataProvider extends ADataProvider{

    getItem(...values: number[]) {
        throw new Error("Method not implemented.");
    }
    getBasketOrderListById(id: number) : Promise<BasketOrder[]>{
        // let req:reqOrder={
        //     orderList:
        // }
         return new Promise((resolve, reject) =>{
  
            resolve([]);
        })
    }
    getBasketOrderById(id: number) : Promise<BasketOrder>{
        return new Promise((resolve, reject) =>{
            //가져오기
            resolve(null);
        })
    }

}