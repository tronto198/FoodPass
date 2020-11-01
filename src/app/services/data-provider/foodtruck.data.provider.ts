import { Injectable } from "@angular/core";
import { ADataProvider } from './data.provider.abstract';
import { LocationData } from 'src/app/data/location';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { reqFoodtruckList, resFoodtruckList } from 'src/app/services/communication/reqType/listData/foodtruckList.req'
import { reqUrl } from '../communication/reqType/req-url.enum';
import { resFoodtruckData } from '../communication/reqType/infoData/foodtruckData.req';


@Injectable()
export class FoodtruckDataProvider extends ADataProvider{

    foodtruckList: FoodtruckData[];

    getItem(id: number) : Promise<FoodtruckData> {
        let req = {
            foodtruckId: id
        }
        return new Promise((resolve) =>{
            this.comm.request<resFoodtruckData>(reqUrl.foodtruckData, req, true).then( r =>
                resolve(r.foodtruckData)
            )
        })
    }

    foodtruckListByLocation(location: LocationData): Promise<FoodtruckData[]> {
        let req: reqFoodtruckList = {
            location: location
        };
        return new Promise((resolve, reject) => {
            this.comm.request<resFoodtruckList>(reqUrl.foodtruckList, req, true, "푸드트럭 리스트를 가져오는 중입니다...")
                .then(data => {
                    this.foodtruckList = data.foodtruckList;
                    if (this.foodtruckList != null) {
                        resolve(this.foodtruckList)
                    } else {
                        reject("푸드트럭 리스트 못가져옴")
                    }

                    console.log('got foodtrucklist');
                })


            // //가져오기
            // resolve([{
            //     id: 3,
            //     introduction: "dd",
            //     name: "test",
            //     notice: "rhdwl",
            //     location: {
            //         lat: 37.4996, lng:127.0264
            //     }
            // }]);
        })
    }

}