import { FoodtruckData } from 'src/app/data/foodtruck';
import { Injectable } from '@angular/core';
import { DataStorage } from './data.storage';
import { OptionData } from 'src/app/data/option';
import { MenuData } from 'src/app/data/menu';

@Injectable()
export class FoodtruckDataCtrl {
    private dataStorage = new DataStorage<DataStorage<DataStorage<OptionData>>>();

    findFoodtruckById(id: number) : FoodtruckData{
        return this.dataStorage.getData(id).data as FoodtruckData;
    }

    setFoodtruckData(...data: FoodtruckData[]){
        data.forEach((val)=>{
            this.dataStorage.setData(new DataStorage<DataStorage<OptionData>>(val));
        })
        
    }

    getMenuList(foodtruckId: number) : MenuData[] {
        return this.dataStorage.getData(foodtruckId).toArray().map((value) => {
            return value.data as MenuData
        })
    }


    findMenuById(foodtruckId: number, id: number) : MenuData {
        return   { 
            id:0,
            menuName:"menu1",
            menuInformation:"menuInform1",
            price:5000,
            }
       // return this.dataStorage.getData(foodtruckId).getData(id).data as MenuData;
    }

    setMenuData(foodtruckId: number, ...data: MenuData[]){
        data.forEach((val)=>{
            this.dataStorage.getData(foodtruckId).setData(new DataStorage<OptionData>(val));
        })
        
    }

    getOptionList(foodtruckId: number, menuId: number) : OptionData[] {
        return this.dataStorage.getData(foodtruckId).getData(menuId).toArray();
    }


    findOptionById(foodtruckId: number, menuId: number, id: number) : OptionData{
        return this.dataStorage.getData(foodtruckId).getData(menuId).getData(id);
    }

    setOptionData(foodtruckId: number, menuId: number, ...data: OptionData[]){
        data.forEach((val)=>{
            this.dataStorage.getData(foodtruckId).getData(menuId).setData(val);
        })
        
    }
    
}