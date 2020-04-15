import { Component, OnInit } from '@angular/core';
import { TabHomeControllerService } from 'src/app/services/tab-home-controller/tab-home-controller.service';

@Component({
  selector: 'home-foodtruck-list',
  templateUrl: './foodtruck-list.page.html',
  styleUrls: ['./foodtruck-list.page.scss'],
})
export class FoodtruckListPage implements OnInit {
  foodtruckList: string[];

  constructor(
    private pageController : TabHomeControllerService
  ) { }

  ngOnInit() {
    this.foodtruckList = ["hh1","hh2","hh3","hh4","hh1","hh2","hh3","hh4"];
  }

  test(ft : string){
    this.pageController.find = true;
    this.pageController.test = ft;
  }
}
