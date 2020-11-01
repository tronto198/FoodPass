import { OptionData } from 'src/app/data/option';
import { Injectable } from '@angular/core';
import { ADataProvider } from './data.provider.abstract';
import { reqOptionList, resOptionList } from '../communication/reqType/listData/optionList.req';
import { reqUrl } from '../communication/reqType/req-url.enum';

@Injectable()
export class OptionDataProvider extends ADataProvider{
    optionList:OptionData[];
    getItem(foodtruckId: number, menuId: number, optionId: number) : Promise<OptionData>{
        let req = {
            foodtruckId: foodtruckId,
            menuId: menuId,
            optionId: optionId
        }
        return this.getDataWithPromise<OptionData>(() => {
            return this.comm.request<OptionData>(reqUrl.optionData, req, true, "옵션 정보를 가져오는 중입니다...")
        })
    }

    getListByFoodtruckMenuId(foodtruckId: number, menuId: number) : Promise<OptionData[]>{
        let req: reqOptionList={
            foodtruckId :foodtruckId,
            menuId : menuId
        }
        return new Promise((resolve, reject) =>{
            this.comm.request<resOptionList>(reqUrl.optionList, req, true, "옵션 리스트를 가져오는 중입니다...")
            .then(data =>{
                this.optionList = data.optionList;
                if(this.optionList!=null){
                    resolve(this.optionList)
                }else{
                    reject("옵션 리스트 못가져옴")
                }
                
                console.log('got optionlist');
            })
           
            // //가져오기
            // resolve([{
            //     id: 10,
            //     name: "option 10",
            //     extraPrice: 500
            // }]);
        })
    }
}