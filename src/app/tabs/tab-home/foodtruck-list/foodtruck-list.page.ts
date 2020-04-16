import { Component, OnInit } from '@angular/core';
import { TabHomeControllerService } from 'src/app/services/tab-home-controller/tab-home-controller.service';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { ServerConnecterService } from 'src/app/services/server-connecter/server-connecter.service';

@Component({
  selector: 'home-foodtruck-list',
  templateUrl: './foodtruck-list.page.html',
  styleUrls: ['./foodtruck-list.page.scss'],
})
export class FoodtruckListPage implements OnInit {
  foodtruckList: FoodtruckData[];
  location: string[];
  inform: string[];
  wating: string[];
  distance: string[];

  constructor(
    private pageController : TabHomeControllerService,
    private serverConnecter : ServerConnecterService
  ) { }

  ngOnInit() {
    //this.foodtruckList = ["닭발 푸드트럭","와플 푸드트럭","아이스크림 푸드트럭"];
    this.location=["A", "B", "C"];
    this.inform=["매운 닭발 있습니다.", "초코맛, 딸기맛 와플 있습니다.", "여러가지 맛 아이스크림이 콘, 컵으로 제공됩니다."];
    this.wating=["3","4","5"];
    this.distance=["100m", "500m", "500m"];
    this.foodtruckList = this.serverConnecter.getFoodtruckData();
  }

}
