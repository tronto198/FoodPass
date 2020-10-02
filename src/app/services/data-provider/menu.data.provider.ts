import { ADataProvider } from './data.provider.abstract';
import { MenuData } from 'src/app/data/menu';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuDataProvider extends ADataProvider{

    getItem(foodtruckid: number, id: number){
        return this.getDataWithPromise<MenuData>(() => { 
            return {id:id, menuName:"간장치킨", menuInformation:"간장베이스",price:17000, imgsrc:""};
        })
    }

    getListByFoodtruckId(foodtruckId: number) : Promise<MenuData[]>{
        return new Promise((resolve, reject) =>{
            //가져오기
            resolve([
                {id:0, menuName:"간장치킨", menuInformation:"간장베이스",price:17000, imgsrc:""},
                {id:1, menuName:"양념치킨", menuInformation:"양념베이스",price:19000, imgsrc:""}
            ]);
        })
    }
}