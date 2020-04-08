import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-foodtruck-list',
  templateUrl: './foodtruck-list.page.html',
  styleUrls: ['./foodtruck-list.page.scss'],
})
export class FoodtruckListPage implements OnInit {
  foodtruckList: string[];

  constructor() { }

  ngOnInit() {
    this.foodtruckList = ["hh","dd","gs"];
  }

}
