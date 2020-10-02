import { OptionData } from 'src/app/data/option';
import { Injectable } from '@angular/core';
import { ADataProvider } from './data.provider.abstract';

@Injectable()
export class OptionDataProvider extends ADataProvider{

    getItem(foodtruckId: number, menuId: number, optionId: number) {
        return this.getDataWithPromise<OptionData>(() => {
            return {
                id: 10,
                name: "option 10",
                extraPrice: 500
            };
        })
    }

    getListByFoodtruckMenuId(foodtruckId: number, menuId: number) : Promise<OptionData[]>{
        return new Promise((resolve, reject) =>{
            //가져오기
            resolve([{
                id: 10,
                name: "option 10",
                extraPrice: 500
            }]);
        })
    }
}