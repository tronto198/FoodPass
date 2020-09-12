import { Injectable } from '@angular/core';
import { DataStorage } from './data.storage';
import { BasketOrder } from 'src/app/data/basket-data/basket-order';

@Injectable()
export class BasketDataCtrl {
    private dataStorage = new DataStorage<BasketOrder>();

    getBasketList() : BasketOrder[] {
        return this.dataStorage.toArray();
    }

    findBasketById(id: number) : BasketOrder{
        return this.dataStorage.getData(id);
    }

    setBasketData(...data: BasketOrder[]){
        data.forEach((val)=>{
            this.dataStorage.setData(val);
        })
        
    }
    
}