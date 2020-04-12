import { Component, OnInit } from '@angular/core';
import { TabHomeControllerService } from 'src/app/services/tab-home-controller/tab-home-controller.service';

@Component({
  selector: 'home-foodtruck-list',
  templateUrl: './foodtruck-list.page.html',
  styleUrls: ['./foodtruck-list.page.scss'],
})
export class FoodtruckListPage implements OnInit {
  foodtruckList: string[];
  location: string[];
  inform: string[];
  wating: string[];

  constructor(
    private pageController : TabHomeControllerService
  ) { }

  ngOnInit() {
    this.foodtruckList = ["닭발 푸드트럭","와플 푸드트럭","아이스크림 푸드트럭"];
    this.location=["A", "B", "C"];
    this.inform=["매운 닭발 있습니다.", "초코맛, 딸기맛 와플 있습니다.", "여러가지 맛 아이스크림이 콘, 컵으로 제공됩니다."];
    this.wating=["3","4","5"];
  }

  test(ft : string){
    this.pageController.find = true;
    this.pageController.test = ft;
  }
}
