import { Component, Input, OnInit } from '@angular/core';
import { MenuData } from 'src/app/data/menu';
import { OptionData } from 'src/app/data/option';
import { OrderConformData } from 'src/app/data/order-confirm';
import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';
import { MenuDataProvider } from 'src/app/services/data-provider/menu.data.provider';
import { OptionDataProvider } from 'src/app/services/data-provider/option.data.provider';
import {OrderedMenuData} from "../../data/ordered-menu";

@Component({
  selector: 'comp-owner-cooking-view',
  templateUrl: './owner-cooking-view.component.html',
  styleUrls: ['./owner-cooking-view.component.scss'],
})
export class OwnerCookingViewComponent implements OnInit {
  // @Input() foodtruckId: number;
  @Input() orderConfirm:OrderConformData
 // @Input() price:number
  front : boolean;
  constructor(
    private dataCtrl: FoodtruckDataCtrl,

    ) { }
    ngOnInit() {
      this.front =true;
      this.confirmData();
      //this.menuList=[1,2,3];

      console.log(this.orderConfirm)
    }
    get foodtruckId(){
      return this.orderConfirm.foodtruckId
    }
    get foodtruckInfo() {
      return this.dataCtrl.findFoodtruckById(this.foodtruckId)
    }
    get orderNo():number{
      return this.orderConfirm.orderNo
    }
    get otherRequest():string{
      return this.orderConfirm.otherRequest
    }
    confirmData(){
      
  
    }
    get orderedMenuList() : OrderedMenuData[] {
      return this.orderConfirm.orderedMenu
    }



  

  toggleFront(){
    this.front = !this.front;
  }

  isFront() : boolean{
    return this.front;
  }

  calltheConsumer(){
    alert("손님을 호출했습니다!");
  }

  // isSMapLooking(): boolean{
  //   return this.s_map;
  // }

 

  static(){}
  // get foodtruckData(): FoodtruckData {
  //   return this.dataCtrl.findFoodtruckById(this.foodtruckId)
  // }
}
