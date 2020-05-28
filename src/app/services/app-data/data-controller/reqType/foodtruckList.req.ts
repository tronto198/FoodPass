import { LocationData } from 'src/app/data/location';
import { FoodtruckData } from 'src/app/data/foodtruck';

export interface reqFoodtruckList {
    location? : LocationData;
}

export interface resFoodtruckList {
    foodtruckList : FoodtruckData[];
}