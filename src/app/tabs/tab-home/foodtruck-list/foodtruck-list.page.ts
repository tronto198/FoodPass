import { Component, OnInit } from '@angular/core';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { PageControllerService } from 'src/app/services/app-data/page-controller/page-controller.service';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';

@Component({
  selector: 'home-foodtruck-list',
  templateUrl: './foodtruck-list.page.html',
  styleUrls: ['./foodtruck-list.page.scss'],
})
export class FoodtruckListPage implements OnInit {
 

  constructor(
    private pageCtrl : PageControllerService,
    private pageData : PageDataStorageService,
  ) { }

  ngOnInit() {
    this.pageData.tabHome.foodtruckListCtrl.getFoodtruckList();
  }

  get foodtruckList() : FoodtruckData[]{
    return this.pageData.tabHome.foodtruckListCtrl.foodtruckList;
  }


  foodtruckClicked(index: number){
    this.pageCtrl.routingHome(this.foodtruckList[index]);
  }
}
