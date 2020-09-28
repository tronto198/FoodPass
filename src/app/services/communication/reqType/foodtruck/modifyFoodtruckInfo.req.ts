import { FoodtruckReq } from './foodtruck.req';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { LocationData } from 'src/app/data/location';

export interface reqModifyFoodtruckInfo extends FoodtruckReq, FoodtruckData {
    name:string;
    image:string;
    introduction:string;
    notice:string;
    location:LocationData;
    foodtruckId:number;
}

export interface resModifyFoodtruckInfo {

}