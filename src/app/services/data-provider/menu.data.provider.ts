import { ADataProvider } from './data.provider.abstract';
import { MenuData } from 'src/app/data/menu';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuDataProvider extends ADataProvider{

    getItem(foodtruckid: number, id: number){
        return this.getDataWithPromise<MenuData>(() => { 
            return null;
        })
    }

    getListByFoodtruckId(foodtruckId: number) : Promise<MenuData[]>{
        return new Promise((resolve, reject) =>{
            //가져오기
            resolve([]);
        })
    }
    getById(id: number) : Promise<MenuData>{
        return new Promise((resolve, reject) =>{
            //가져오기
            resolve(null);
        })
    }
}