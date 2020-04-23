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
  routedata: number;
  //routedata:FoodtruckData[];
  menuList: MenuData[];

  constructor(
    private pageCtrl : TabHomeControllerService,
    private serverConnecter : ServerConnecterService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    this.routedata = Number(this.route.snapshot.paramMap.get("id"));
    this.menuList = this.serverConnecter.getMenuData(this.routedata);
  }

  ngAfterContentInit(){
    if(isNaN(this.routedata)){
      this.router.navigateByUrl('/tabs/tab-home');
    }
  }

  get data(){
    return this.pageCtrl.test;
  }
}
