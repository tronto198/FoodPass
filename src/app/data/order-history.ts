import { FoodtruckData } from './foodtruck';

export interface OrderHistoryData {
    id: number;
    foodtruckInfo: FoodtruckData;
    price: number;
}