import { Component, OnInit, AfterContentInit, DoCheck } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TabHomeControllerService } from 'src/app/services/tab-home-controller/tab-home-controller.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerConnecterService } from 'src/app/services/server-connecter/server-connecter.service';
import { MenuData } from 'src/app/data/menu';
import {FoodtruckData} from'src/app/data/foodtruck';
@Component({
  selector: 'app-foodtruck-info',
  templateUrl: './foodtruck-info.page.html',

  styleUrls: ['./foodtruck-info.page.scss'],
})
export class FoodtruckInfoPage implements OnInit, AfterContentInit  {
  foodtruckId: number;
  //routedata:FoodtruckData[];
  menuList: MenuData[];

  constructor(
    private pageCtrl : TabHomeControllerService,
    private serverConnecter : ServerConnecterService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    this.foodtruckId = Number(this.route.snapshot.paramMap.get("id"));
    this.menuList = this.serverConnecter.getMenuData(this.foodtruckId);

    this.comeByWebAddress();
  }

  ngAfterContentInit(){
    if(isNaN(this.foodtruckId)){
      this.router.navigateByUrl('/tabs/home');
    }
  }

  comeByWebAddress(){
    //foodtruckinfo 를 원래는 위에서 받아오지만
    //만약 웹으로 받아왔다면 여기에는 없는 자료, 그걸로 판별

    //foodtruckinfo를 서버에서 다운로드 후 history에 루트주소부터 넣기
  }

  get data(){
    return this.pageCtrl.test;
  }
}
