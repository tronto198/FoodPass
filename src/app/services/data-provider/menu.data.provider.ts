import { ADataProvider } from './data.provider.abstract';
import { MenuData } from 'src/app/data/menu';
import { Injectable } from '@angular/core';
import { reqMenuList, resMenuList } from '../communication/reqType/listData/menuList.req';
import { reqUrl } from '../communication/reqType/req-url.enum';

@Injectable()
export class MenuDataProvider extends ADataProvider{
    menuList:MenuData[];
    getItem(foodtruckid: number, id: number){
        return this.getDataWithPromise<MenuData>(() => { 
            return {id:id, menuName:"간장치킨", menuInformation:"간장베이스",price:17000, imgsrc:""};
        })
    }

    getListByFoodtruckId(foodtruckId: number) : Promise<MenuData[]>{
        console.log(`getMenuData foodtruckId: ${foodtruckId} `)
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
                
                console.log('got menu list');
            })

            // //가져오기
            // resolve([
            //     {id:0, menuName:"간장치킨", menuInformation:"간장베이스",price:17000, imgsrc:""},
            //     {id:1, menuName:"양념치킨", menuInformation:"양념베이스",price:19000, imgsrc:""}
            // ]);
        })
    }
}