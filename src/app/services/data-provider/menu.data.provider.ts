import { ADataProvider } from './data.provider.abstract';
import { MenuData } from 'src/app/data/menu';
import { Injectable } from '@angular/core';
import { reqMenuList, resMenuList } from '../communication/reqType/listData/menuList.req';
import { reqUrl } from '../communication/reqType/req-url.enum';
import { resMenuData } from '../communication/reqType/infoData/menuData.req';

@Injectable()
export class MenuDataProvider extends ADataProvider{
    menuList:MenuData[];
    
    getItem(foodtruckid: number, id: number) : Promise<MenuData>{
        return new Promise((resolve) =>{
            let req = {
                foodtruckId: foodtruckid,
                menuId: id
            }
            this.comm.request<resMenuData>(reqUrl.menuData, req, true, "메뉴 데이터를 가져오는 중입니다.").then(r => {
                resolve(r.menuData)
            })
        })
    }

    getListByFoodtruckId(foodtruckId: number) : Promise<MenuData[]>{
        let req: reqMenuList={
            foodtruckId:foodtruckId
        }
        return new Promise((resolve, reject) =>{
            this.comm.request<resMenuList>(reqUrl.menuList, req, true, "메뉴 리스트를 가져오는 중입니다...")
            .then(data =>{
                this.menuList = data.menuList;
                if(this.menuList!=null){
                    resolve(this.menuList)
                }else{
                    reject("메뉴 리스트 못가져옴")
                }
            })
        })
    }
}