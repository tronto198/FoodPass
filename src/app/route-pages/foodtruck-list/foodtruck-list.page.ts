import { Component, OnInit, OnDestroy } from '@angular/core';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { TabHomeFoodtruckListCtrl } from 'src/app/services/app-data/page-data-storage/tab-home-data/foodtruckList.ctrl';
import { ModalController } from '@ionic/angular';
import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';
import { PageControllerService } from 'src/app/services/page-controller.service';
import { FoodtruckDataProvider } from 'src/app/services/data-provider/foodtruck.data.provider';

@Component({
  selector: 'home-foodtruck-list',
  templateUrl: './foodtruck-list.page.html',
  styleUrls: ['./foodtruck-list.page.scss'],
})
export class FoodtruckListPage implements OnInit, OnDestroy {

  constructor(
    private pageCtrl : PageControllerService,
    private sharedData : SharedDataService,
    private dataCtrl : FoodtruckDataCtrl,
    private ftProvider : FoodtruckDataProvider,
  ) { }

  ngOnInit() {
    // // this.ftProvider.foodtruckListByLocation()
    // this.sharedData.geolocation.getLocation().then(coords =>{
    //   this.ftProvider.foodtruckListByLocation(coords).then(r =>{
    //     this.dataCtrl.setFoodtruckData(...r)
    //   })
    //   // this.dataCtrl. getFoodtruckList(this.sharedData.geolocation.currentLocation);
    //   // this.sharedData.geolocation.watchLocation((coords) =>{
    //   //   this.ctrl.calculateFoodtruckDistance();
    //   // });
    // })
    
  }

  ngOnDestroy(){
    // this.sharedData.geolocation.locationWatcher.unsubscribe();
  }

  get foodtruckList() : FoodtruckData[] {
    return this.dataCtrl.currentFoodtrucks;
  }
  
  isEmpty(){
   return this.foodtruckList.length==0
  }
  foodtruckClicked(index: number){
    //this.FoodtruckInfoPage
    this.pageCtrl.presentFoodtruck(this.foodtruckList[index].id,null);
    
  }
}
