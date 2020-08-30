import { Injectable } from '@angular/core';
import { ADataProvider } from './data.provider.abstract';
import { OrderData } from 'src/app/data/order';

@Injectable()
export class OptionDataProvider extends ADataProvider{
    getOrderListByUserId(userId: number) : Promise<OrderData[]>{
        return new Promise((resolve, reject) =>{
            //가져오기
            resolve([]);
        })
    }
    getById(id: number) : Promise<OrderData>{
        return new Promise((resolve, reject) =>{
            //가져오기
            resolve(null);
        })
    }
}