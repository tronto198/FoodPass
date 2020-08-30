import { FoodtruckData } from 'src/app/data/foodtruck';
import { Injectable } from '@angular/core';
import { DataStorage } from './data.storage';
import { OrderData } from 'src/app/data/order';
import { OrderedMenuData } from 'src/app/data/ordered-menu';
import { MenuData } from 'src/app/data/menu';
import { OptionData } from 'src/app/data/option';

@Injectable()
export class OrderDataCtrl {
    private dataStorage = new DataStorage<OrderData>();

    
    findOrderById(id: number) : OrderData{
        return this.dataStorage.getData(id) as OrderData;
    }


    findOrderedMenuById(orderId:number) : OrderedMenuData[]{
        return this.dataStorage.getData(orderId).orderedMenu as OrderedMenuData[];
    }

    setOrderData(data: OrderData[]){
        data.forEach((val)=>{
            this.dataStorage.setData(val);
        })
    }

    getOrderList() : OrderData[] {
        return this.dataStorage.toArray();
    }

    // setOrderedMenuData(orderId: number, data: OrderedMenuData[]){
    //     data.forEach((val)=>{
    //          this.dataStorage.getData(orderId).setData(val);
    //     })
    // }

    // getOrderedMenuList(orderId: number) : OrderData[] {
    //     // return this.dataStorage.toArray();
    // }

    
}