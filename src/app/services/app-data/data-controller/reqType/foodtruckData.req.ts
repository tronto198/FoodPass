import { FoodtruckData } from 'src/app/data/foodtruck';

export interface reqFoodtruckData {
    foodtruckId : number;
}

export interface resFoodtruckData {
    foodtruckData : FoodtruckData;
}