import { FoodtruckData } from 'src/app/data/foodtruck';
import { Injectable } from '@angular/core';
import { DataStorage } from './data.storage';
import { OptionData } from 'src/app/data/option';
import { MenuData } from 'src/app/data/menu';
import { FoodtruckDataProvider } from '../data-provider/foodtruck.data.provider';
import { MenuDataProvider } from '../data-provider/menu.data.provider';
import { OptionDataProvider } from '../data-provider/option.data.provider';

@Injectable()
export class FoodtruckDataCtrl {
    private dataStorage = new DataStorage<DataStorage<DataStorage<OptionData>>>();

    constructor(
    ){

    }

    findFoodtruckById(id: number) : FoodtruckData | null {
        let ft = this.dataStorage.getData(id)
        return ft ? ft.data as FoodtruckData : null
    }

    setFoodtruckData(...data: FoodtruckData[]){
        data.forEach((val)=>{
            this.dataStorage.setData(new DataStorage<DataStorage<OptionData>>(val));
        })
        
    }

    getMenuList(foodtruckId: number) : MenuData[] | null {
        let ft = this.dataStorage.getData(foodtruckId)
        return ft ? ft.toArray().map((value) => {
            return value.data as MenuData
        }) : null
    }


    // findMenuById(foodtruckId: number, id: number) : MenuData {
    //     return   { 
    //         id:0,
    //         menuName:"menu1",
    //         menuInformation:"menuInform1",
    //         price:5000,
    //         }
    //    // return this.dataStorage.getData(foodtruckId).getData(id).data as MenuData;
    findMenuById(foodtruckId: number, id: number) : MenuData | null {
        let ft = this.dataStorage.getData(foodtruckId)
        if(ft == null){
            return null
        }
        let menu = ft.getData(id)
        return menu ? menu.data as MenuData : null
    }

    setMenuData(foodtruckId: number, ...data: MenuData[]){
        data.forEach((val)=>{
            this.dataStorage.getData(foodtruckId).setData(new DataStorage<OptionData>(val));
        })
        
    }

    getOptionList(foodtruckId: number, menuId: number) : OptionData[] | null {
        let ft = this.dataStorage.getData(foodtruckId)
        if(ft == null){
            return null;
        }
        let menu = ft.getData(menuId)
        return menu ? menu.toArray() : null;
    }


    findOptionById(foodtruckId: number, menuId: number, id: number) : OptionData | null {
        let ft = this.dataStorage.getData(foodtruckId)
        if(ft == null){
            return null
        }
        let menu = ft.getData(menuId)
        if(menu == null) {
            return null
        }

        let option = menu.getData(id)
        return option ? option : null
        
    }

    setOptionData(foodtruckId: number, menuId: number, ...data: OptionData[]){
        data.forEach((val)=>{
            this.dataStorage.getData(foodtruckId).getData(menuId).setData(val);
        })
        
    }
    
}