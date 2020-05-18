import { Component, OnInit, AfterContentInit, DoCheck } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TabHomeControllerService } from 'src/app/services/tab-home-controller/tab-home-controller.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerConnecterService } from 'src/app/services/server-connecter/server-connecter.service';
import { MenuData } from 'src/app/data/menu';
import {FoodtruckData} from'src/app/data/foodtruck';
import { PageControllerService } from 'src/app/services/page-controller/page-controller.service';
@Component({
  selector: 'app-foodtruck-info',
  templateUrl: './foodtruck-info.page.html',

  styleUrls: ['./foodtruck-info.page.scss'],
})
export class FoodtruckInfoPage implements OnInit  {
  foodtruckId: number;
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
    this.getFoodtruckInfo();
    this.getMenuList();

  }

  getFoodtruckInfo(){
    //여기에서 foodtruckinfo 가 있는지 보고
    // 없으면 getRoutingData로 foodtruckinfo를 웹에서 받아오기
    // 있으면 생략
    this.getRoutingData();
  }

  getRoutingData(){
    
    this.foodtruckId = Number(this.route.snapshot.paramMap.get("id"));

    if(isNaN(this.foodtruckId)){
      this.pageCtrl.routingHome();
    }
    //foodtruckinfo 가져오기
  }

  getMenuList(){
    this.menuList = this.serverConnecter.getMenuData(this.foodtruckId);
  }

}
