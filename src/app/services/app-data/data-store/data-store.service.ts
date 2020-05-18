import { Injectable } from '@angular/core';
import { Basket } from './data-stored/basket.data';
import { FoodtruckData } from 'src/app/data/foodtruck';

@Injectable()
export class DataStoreService {

  //---home
  //basket
  private basketData : Basket;
  //home
  private tabHomeData : tabHome

  //---order
  //history
  //waiting

  
  constructor() { }

  get basket() : Basket {
    return this.basketData;
  }

  get foodtruckList() : FoodtruckData[]{

  }
}
