import { Component, OnInit } from '@angular/core';
import { TabHomeControllerService } from 'src/app/services/tab-home-controller/tab-home-controller.service';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { ServerConnecterService } from 'src/app/services/server-connecter/server-connecter.service';
import { PageControllerService } from 'src/app/services/app-data/page-controller/page-controller.service';

@Component({
  selector: 'home-foodtruck-list',
  templateUrl: './foodtruck-list.page.html',
  styleUrls: ['./foodtruck-list.page.scss'],
})
export class FoodtruckListPage implements OnInit {
  foodtruckList: FoodtruckData[];
 

  constructor(
    private pageCtrl : PageControllerService,
    private serverConnecter : ServerConnecterService
  ) { }

  ngOnInit() {
    
    this.foodtruckList = this.serverConnecter.getFoodtruckList();
  }

  foodtruckClicked(index: number){
    this.pageCtrl.routingHome(this.foodtruckList[index]);
  }
}
