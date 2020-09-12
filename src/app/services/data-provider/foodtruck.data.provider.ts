import { Injectable } from "@angular/core";
import { ADataProvider } from './data.provider.abstract';
import { LocationData } from 'src/app/data/location';
import { FoodtruckData } from 'src/app/data/foodtruck';


@Injectable()
export class FoodtruckDataProvider extends ADataProvider{

    getItem(id: number){
        return this.getDataWithPromise<FoodtruckData>(() =>{
            return null;
        })
    }

    foodtruckListByLocation(location: LocationData) : Promise<FoodtruckData[]> {
        return new Promise((resolve, reject) =>{
            //가져오기
            resolve([{
                id: 3,
                introduction: "dd",
                name: "test",
                notice: "rhdwl",
                location: {
                    lat: 37.4996, lng:127.0264
                }
            }]);
        })
    }
    
}