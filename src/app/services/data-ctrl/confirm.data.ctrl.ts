import { Injectable } from '@angular/core';
import { CommunicationService } from '../communication/communication.service';

import { reqUrl } from '../communication/reqType/req-url.enum';

import { FoodtruckDataCtrl } from './foodtruck.data.ctrl';

import { OrderConformData } from 'src/app/data/order-confirm';
import {  orderConformResponse, resOrderConfirm } from '../communication/reqType/order/orderConfirm_owner.req';
import { OrderedMenuData } from 'src/app/data/ordered-menu';
//import { resOrderConfirm } from '../communication/reqType/foodtruck/order/orderConfirm.req';

@Injectable()
export class ConfirmDataCtrl {
  orderConformData:OrderConformData[]=[];
  userIdList:number[]=[];
  index:number=0
  tempConform:OrderConformData
  tempOrdered:OrderedMenuData
  constructor(
    private comm : CommunicationService,
    private dataCtrl:FoodtruckDataCtrl
    ) {}
  PushFun(val:orderConformResponse){
    
    this.tempConform.id=val.id
    this.tempConform.foodtruckId=val.foodtruckId
    this.tempConform.orderNo=val.orderNo
    this.tempConform.otherRequest=val.otherRequest
    this.tempConform.userId=val.userId
    
    this.orderConformData.push(this.tempConform)
    this.index++
  }
  cookingItem(foodtruckId:number):Promise<OrderConformData[]> {
    let req={
      foodtruckId:foodtruckId
    }
    console.log(`cooking Item 함수 실행중`, foodtruckId)
    return new Promise((resolve, reject)=>{
      this.comm.request<resOrderConfirm>(reqUrl.orderConfirm, req, true, "쿠킹리스트 가져오는 중입니다..")
      .then(data=>{
        
        data.orderConfirmList.forEach((val)=>{
          if(this.orderConformData.length==0){
            this.PushFun(val)          
           
          }else if(this.orderConformData[this.index-1].userId!=val.userId){
            this.PushFun(val)
          }
        })

        this.index=0

        data.orderConfirmList.forEach((val)=>{
          while(this.orderConformData[this.index].userId!=val.userId){
            this.index++;
            if(this.index>this.orderConformData.length){
              break;
            }
          }
          if(this.orderConformData[this.index].userId==val.userId){
            this.tempOrdered.menuinfo=this.dataCtrl.findMenuById(foodtruckId, val.orderedMenu.menuId)
            this.tempOrdered.optioninfo=this.dataCtrl.findOptionById(foodtruckId, val.orderedMenu.menuId,val.orderedMenu.optionId)
            this.tempOrdered.amount=val.orderedMenu.amount
            this.orderConformData[this.index].orderedMenu.push(this.tempOrdered)
          }
        })
        if(this.orderConformData!=null){
          resolve(this.orderConformData)
        }else{
          reject("사장- 음식확인 리스트 못가져옴")
        }
      })
    })
   
  }


 


}
