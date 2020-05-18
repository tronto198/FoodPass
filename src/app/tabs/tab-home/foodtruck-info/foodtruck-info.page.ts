import { Component, OnInit, AfterContentInit, DoCheck } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TabHomeControllerService } from 'src/app/services/tab-home-controller/tab-home-controller.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerConnecterService } from 'src/app/services/server-connecter/server-connecter.service';
import { MenuData } from 'src/app/data/menu';
import {FoodtruckData} from'src/app/data/foodtruck';
import { PageControllerService } from 'src/app/services/app-data/page-controller/page-controller.service';
@Component({
  selector: 'app-foodtruck-info',
  templateUrl: './foodtruck-info.page.html',

  styleUrls: ['./foodtruck-info.page.scss'],
})
export class FoodtruckInfoPage implements OnInit  {
  // foodtruckId: number;
  foodtruckName:string;
  foodtruckImage:string;

  //routedata:FoodtruckData[];
  menuList: MenuData[];

  constructor(
    private homeCtrl : TabHomeControllerService,
    private serverConnecter : ServerConnecterService,
    private route : ActivatedRoute,
    private pageCtrl : PageControllerService,
  ) { }

  ngOnInit() {
    this.getBaseData();
    this.getMenuList();

  }

  get foodtruckData(){
    return this.pageCtrl.home_currentFoodtruck;
  }
  set foodtruckData(data: FoodtruckData){
    this.pageCtrl.home_currentFoodtruck = data;
    
  }

  getBaseData(){
    //여기에서 foodtruckinfo 가 있는지 보고
    // 없으면 getRoutingData로 foodtruckinfo를 웹에서 받아오기
    // 있으면 생략
    this.foodtruckData = this.pageCtrl.home_currentFoodtruck;
    if(this.foodtruckData == undefined){
      this.getRoutingData();
    }
  }

  getRoutingData(){
    let foodtruckId = Number(this.route.snapshot.paramMap.get("id"));
    if(isNaN(foodtruckId)){
      this.pageCtrl.routingHome();
    }
    this.foodtruckData = this.serverConnecter.getFoodtruckData(foodtruckId);
  }

  getMenuList(){
    this.menuList = this.serverConnecter.getMenuList(this.foodtruckData.id);
  }

  menuClicked(index: number){
    this.pageCtrl.routingHome(this.foodtruckData, this.menuList[index]);
  }

}
