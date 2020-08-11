import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { DefaultValue } from 'src/environments/defaultValue';
import { ModalController } from '@ionic/angular';
import { MenuDataProvider } from 'src/app/services/data-provider/menu.data.provider';
import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';
import { PageControllerService } from 'src/app/services/page-controller.service';
@Component({
  selector: 'foodtruck-foodtruckInfo',
  templateUrl: './foodtruck-info.page.html',

  styleUrls: ['./foodtruck-info.page.scss'],
})
export class FoodtruckInfoPage implements OnInit  {

  foodtruckId: number;
  
  constructor(
    private route : ActivatedRoute,
    private pageCtrl : PageControllerService,
    private menuProvider: MenuDataProvider,
    private dataCtrl: FoodtruckDataCtrl,
  ) { }

  ngOnInit() {
    this.getRoutingData();
    this.menuProvider.getListByFoodtruckId(this.foodtruckId).then(list=>{
      this.dataCtrl.setMenuData(this.foodtruckId, ...list);
    })

  }

  get foodtruckData() : FoodtruckData{
    return this.dataCtrl.findFoodtruckById(this.foodtruckId);
  }

  // get foodtruckName() : string {
  //   return this.foodtruckData.name;
  // }

  get foodtruckImage() : string {
    return this.foodtruckData.imgSrc? this.foodtruckData.imgSrc : DefaultValue.foodtruckImgSrc;
  }

  get menuList() : MenuData[]{
    return this.dataCtrl.getMenuList(this.foodtruckId);
  }

  getMenuImg(i : number) : string {
    return this.menuList[i].imgsrc? this.menuList[i].imgsrc : DefaultValue.MenuImgSrc;
  }

  getRoutingData(){
    this.foodtruckId = Number(this.route.snapshot.paramMap.get("id"));
    if(isNaN(this.foodtruckId)){
      this.pageCtrl.routingHome();
    }
    
  }

  menuClicked(index: number){
    this.pageCtrl.presentFoodtruck(this.foodtruckData, this.menuList[index]);
  }

}
