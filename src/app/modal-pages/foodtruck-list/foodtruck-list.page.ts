import { Component, OnInit, OnDestroy } from '@angular/core';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { PageControllerService } from 'src/app/services/app-data/page-controller/page-controller.service';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { TabHomeFoodtruckListCtrl } from 'src/app/services/app-data/page-data-storage/tab-home-data/foodtruckList.ctrl';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'home-foodtruck-list',
  templateUrl: './foodtruck-list.page.html',
  styleUrls: ['./foodtruck-list.page.scss'],
})
export class FoodtruckListPage implements OnInit, OnDestroy {
 
  constructor(
    private pageCtrl : PageControllerService,
    private pageData : PageDataStorageService,
    private sharedData : SharedDataService,
    private modalCtrl : ModalController
  ) { }

  ngOnInit() {
    this.sharedData.geolocation.getLocation().then(coords =>{
      this.ctrl.getFoodtruckList(this.sharedData.geolocation.currentLocation);
      // this.sharedData.geolocation.watchLocation((coords) =>{
      //   this.ctrl.calculateFoodtruckDistance();
      // });
    })
    
  }

  ngOnDestroy(){
    // this.sharedData.geolocation.locationWatcher.unsubscribe();
  }

  get ctrl() : TabHomeFoodtruckListCtrl {
    return this.pageData.tabHome.foodtruckListCtrl;
  }
  get foodtruckList() : FoodtruckData[]{
    return this.pageData.tabHome.foodtruckListCtrl.foodtruckList;
  }


  foodtruckClicked(index: number){
    this.pageCtrl.presentFoodtruck(this.foodtruckList[index]);
  }
}
