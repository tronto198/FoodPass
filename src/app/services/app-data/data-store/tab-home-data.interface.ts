import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';

export interface TabHomeData{
    foodtruckList: FoodtruckData[];
    currentFoodtruck: FoodtruckData;
    currentMenu: MenuData;
    
  }