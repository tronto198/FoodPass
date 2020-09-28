import { LocationData } from 'src/app/data/location';

export interface reqNewFoodtruck {
    name:string;
    image:string;
    introduction:string;
    notice:string;
    location:LocationData;
}

export interface resNewFoodtruck {
    foodtruckId : number;
}