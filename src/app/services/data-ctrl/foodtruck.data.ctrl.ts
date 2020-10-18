import { FoodtruckData } from 'src/app/data/foodtruck';
import { Injectable } from '@angular/core';
import { DataStorage } from './data.storage';
import { OptionData } from 'src/app/data/option';
import { MenuData } from 'src/app/data/menu';
import { FoodtruckDataProvider } from '../data-provider/foodtruck.data.provider';
import { MenuDataProvider } from '../data-provider/menu.data.provider';
import { OptionDataProvider } from '../data-provider/option.data.provider';
import { DefaultValue } from 'src/environments/defaultValue';

@Injectable()
export class FoodtruckDataCtrl {
    private dataStorage = new DataStorage<DataStorage<DataStorage<OptionData>>>();

    currentFoodtrucks : FoodtruckData[] = [];
    FoodtruckMenus: MenuData[]=[];
    constructor(
    ){

    }

    findFoodtruckById(id: number) : FoodtruckData {
        let ft = this.dataStorage.getData(id)
        return ft ? ft.data as FoodtruckData : DefaultValue.foodtruckData
    }

    setFoodtruckData(...data: FoodtruckData[]){
        data.forEach((val)=>{
            if (this.dataStorage.getData(val.id) == null){
                this.dataStorage.setData(new DataStorage<DataStorage<OptionData>>(val));
            }
        })
        
    }

    getMenuList(foodtruckId: number) : MenuData[] {
        let ft = this.dataStorage.getData(foodtruckId)
        return ft ? ft.toArray().map((value) => {
            return value.data as MenuData
        }) : []
    }


    // findMenuById(foodtruckId: number, id: number) : MenuData {
    //     return   { 
    //         id:0,
    //         menuName:"menu1",
    //         menuInformation:"menuInform1",
    //         price:5000,
    //         }
    //    // return this.dataStorage.getData(foodtruckId).getData(id).data as MenuData;
    findMenuById(foodtruckId: number, id: number) : MenuData {
        let ft = this.dataStorage.getData(foodtruckId)
        if(ft == null){
            return DefaultValue.menuData
        }
        let menu = ft.getData(id)
        return menu ? menu.data as MenuData : DefaultValue.menuData
    }

    setMenuData(foodtruckId: number, ...data: MenuData[]){
        this.FoodtruckMenus=data
        console.log(`setMenuData foodtruckId: ${foodtruckId}, data: ${data}`, data)
        data.forEach((val)=>{
            console.log("foodtruck.data.ctrl.ts setMenuData:: "+ this.dataStorage.getData(foodtruckId))
            this.dataStorage.getData(foodtruckId).setData(new DataStorage<OptionData>(val));
        })
        
    }

    getOptionList(foodtruckId: number, menuId: number) : OptionData[] {
        let ft = this.dataStorage.getData(foodtruckId)
        if(ft == null){
            return [ DefaultValue.optionData ];
        }
        let menu = ft.getData(menuId)
        return menu ? menu.toArray() : [DefaultValue.optionData];
    }


    findOptionById(foodtruckId: number, menuId: number, id: number) : OptionData {
        let ft = this.dataStorage.getData(foodtruckId)
        if(ft == null){
            return DefaultValue.optionData
        }
        let menu = ft.getData(menuId)
        if(menu == null) {
            return DefaultValue.optionData
        }

        let option = menu.getData(id)
        return option ? option : DefaultValue.optionData
        
    }

    setOptionData(foodtruckId: number, menuId: number, ...data: OptionData[]){
        data.forEach((val)=>{
            this.dataStorage.getData(foodtruckId).getData(menuId).setData(val);
        })
        
    }
    
}