import { LocationData } from 'src/app/data/location';
import { FoodtruckReq } from './foodtruck.req';

export interface reqOpenFoodtruck extends FoodtruckReq {
    location: LocationData;
}

export interface resOpenFoodtruck{

}