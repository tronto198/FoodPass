import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { OptionData } from 'src/app/data/option';
import { PageControllerService } from 'src/app/services/page-controller.service';
import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';
import { BasketDataCtrl } from 'src/app/services/data-ctrl/basket.data.ctrl';

@Component({
  selector: 'foodtruck-menuInfo',
  templateUrl: './menu-info.page.html',
  styleUrls: ['./menu-info.page.scss'],
})
export class MenuInfoPage implements OnInit {
  amount: number = 1;
  price: number = 0;
  checkedValue: number;
  foodtruckData : FoodtruckData;
  optionList : OptionData[];
  menuData : MenuData;
  // todo 수정해야함

  constructor(
    private route: ActivatedRoute,
    private foodtruckDataCtrl: FoodtruckDataCtrl,
    private pageCtrl : PageControllerService,
    private basketCtrl : BasketDataCtrl,
  ) { }

  ngOnInit() {
    this.getBaseData();
    // this.optionListCtrl.getOptionList(this.foodtruckData.id, this.menuData.id);
    this.checkedValue = 1001;
  }

  
  ctrlAmount(add : boolean){
    
    if(add){
      this.amount++;
    }
    else{
      if(this.amount > 1){
        this.amount--;
      }
    }
  }

  // get foodtruckData() : FoodtruckData{
  //   return this.routeCtrl.currentFoodtruck;
  // }


  getBaseData(){
    if(this.menuData == undefined || this.foodtruckData == undefined){
      this.getRoutingData();
    }
  }

  getRoutingData(){
    let foodtruckId = Number(this.route.snapshot.paramMap.get("foodtruckId"));
    let menuId = Number(this.route.snapshot.paramMap.get("id"));
    if(isNaN(menuId) || isNaN(foodtruckId)){
      this.pageCtrl.routingHome();
    }

    this.foodtruckDataCtrl.findFoodtruckById(foodtruckId)
    // this.routeCtrl.getFoodtruckData(foodtruckId); //여기서 데이터 가져오기
    // this.routeCtrl.getMenuData(foodtruckId, menuId);  //여기서 데이터 가져오기
  }

  orderToBasket(){
    this.basketCtrl.push(this.foodtruckData, this.menuData, this.optionList[0], this.amount);
    this.pageCtrl.presentFoodtruck(this.foodtruckData.id);
  }


}
