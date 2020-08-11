import { Component, OnInit, OnDestroy } from '@angular/core';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { TabHomeFoodtruckListCtrl } from 'src/app/services/app-data/page-data-storage/tab-home-data/foodtruckList.ctrl';
import { ModalController } from '@ionic/angular';
import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';
import { PageControllerService } from 'src/app/services/page-controller.service';

@Component({
  selector: 'home-foodtruck-list',
  templateUrl: './foodtruck-list.page.html',
  styleUrls: ['./foodtruck-list.page.scss'],
})
export class FoodtruckListPage implements OnInit, OnDestroy {

  foodtruckIdList: number[];
 
  constructor(
    private pageCtrl : PageControllerService,
    private sharedData : SharedDataService,
    private dataCtrl : FoodtruckDataCtrl
  ) { }

  ngOnInit() {
    this.sharedData.geolocation.getLocation().then(coords =>{
      // this.ctrl.getFoodtruckList(this.sharedData.geolocation.currentLocation);
      // this.sharedData.geolocation.watchLocation((coords) =>{
      //   this.ctrl.calculateFoodtruckDistance();
      // });
    })
    
  }

  ngOnDestroy(){
    // this.sharedData.geolocation.locationWatcher.unsubscribe();
  }

  
  // get foodtruckList() : FoodtruckData[]{
  //   return this.foodtruckIdList.map((value) =>{
  //       return this.dataCtrl.findFoodtruckById(value)
  //   });
  // }


  foodtruckClicked(index: number){
    // this.pageCtrl.presentFoodtruck(this.foodtruckList[index]);
  }
}
