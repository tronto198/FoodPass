import { Component, OnInit, AfterViewChecked, AfterContentChecked, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { BasketControllerService } from 'src/app/tabs/tab-home/basket-controller/basket-controller.service';
import { OptionData } from 'src/app/data/option';
import { PageControllerService } from 'src/app/services/app-data/page-controller/page-controller.service';
import { ServerConnecterService } from 'src/app/services/server-connecter/server-connecter.service';

@Component({
  selector: 'app-menu-info',
  templateUrl: './menu-info.page.html',
  styleUrls: ['./menu-info.page.scss'],
})
export class MenuInfoPage implements OnInit {
  optionList: OptionData[];
  amount: number = 1;

  constructor(
    private route: ActivatedRoute,
    private basketCtrl: BasketControllerService,
    private pageCtrl : PageControllerService,
    private server : ServerConnecterService,
  ) { }

  ngOnInit() {
    this.getBaseData();
  }

  get foodtruckData() : FoodtruckData{
    return this.pageCtrl.home_currentFoodtruck;
  }
  set foodtruckData(data: FoodtruckData){
    this.pageCtrl.home_currentFoodtruck = data;
  }

  get menuData() : MenuData{
    return this.pageCtrl.home_currentMenu;
  }
  set menuData(data : MenuData){
    this.pageCtrl.home_currentMenu = data;
  }

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

    this.foodtruckData = this.server.getFoodtruckData(foodtruckId);
    this.menuData = this.server.getMenuData(foodtruckId, menuId);
  }

  getOptionList(){
    this.optionList = this.server.getOptionList(this.foodtruckData.id, this.menuData.menuID);
  }


  orderToBasket(){
    this.basketCtrl.push(this.foodtruckData, this.menuData, this.optionList[0], this.amount);
  }


}
