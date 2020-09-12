
import { Injectable } from '@angular/core';
import { ADataProvider } from './data.provider.abstract';
import { BasketOrder } from 'src/app/data/basket-data/basket-order';

@Injectable()
export class BasketDataProvider extends ADataProvider{
    getBasketOrderListById(id: number) : Promise<BasketOrder[]>{
        return new Promise((resolve, reject) =>{
            //가져오기
            resolve([]);
        })
    }
    // getById(id: number) : Promise<OptionData>{
    //     return new Promise((resolve, reject) =>{
    //         //가져오기
    //         resolve(null);
    //     })
    // }

    o
}