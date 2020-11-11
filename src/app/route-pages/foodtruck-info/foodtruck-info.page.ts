import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { DefaultValue } from 'src/environments/defaultValue';
import { ModalController } from '@ionic/angular';
import { MenuDataProvider } from 'src/app/services/data-provider/menu.data.provider';
import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';
import { PageControllerService } from 'src/app/services/page-controller.service';
import { FoodtruckDataProvider } from 'src/app/services/data-provider/foodtruck.data.provider';
import { MenuInfoPage } from './menu-info/menu-info.page';
@Component({
  selector: 'foodtruck-foodtruckInfo',
  templateUrl: './foodtruck-info.page.html',

  styleUrls: ['./foodtruck-info.page.scss'],
})
export class FoodtruckInfoPage implements OnInit  {
  b:boolean;
  foodtruckId: number;
  
  constructor(
    private route : ActivatedRoute,
    private pageCtrl : PageControllerService,
    private ftProvider: FoodtruckDataProvider,
    private menuProvider: MenuDataProvider,
    private dataCtrl: FoodtruckDataCtrl,
    private modalCtrl: ModalController,
  ) { }

  async ngOnInit() {
    this.b=false;
    await this.getRoutingData();
    this.menuProvider.getListByFoodtruckId(this.foodtruckId).then(list=>{

      this.dataCtrl.setMenuData(this.foodtruckId, ...list);
    })

  }

  get foodtruckData() : FoodtruckData{
    let data = this.dataCtrl.findFoodtruckById(this.foodtruckId)
    if(data == null)
      return DefaultValue.foodtruckData;
    else
      return data;
  }

  get foodtruckName() : string {
    return this.foodtruckData.name;
  }

  get foodtruckImage() : string {
    return this.foodtruckData.imgSrc? this.foodtruckData.imgSrc : DefaultValue.foodtruckImgSrc;
  }

  get menuList() : MenuData[]{
    //return this.dataCtrl.FoodtruckMenus;
    return this.dataCtrl.getMenuList(this.foodtruckId);
  }

  async getRoutingData(){
    this.foodtruckId = Number(this.route.snapshot.paramMap.get("id"));
    console.log(this.foodtruckId)
    if(isNaN(this.foodtruckId)){
      this.pageCtrl.routingHome();
      return;
    }

    this.dataCtrl.setFoodtruckData(await this.ftProvider.getItem(this.foodtruckId))

    // if(this.dataCtrl.findFoodtruckById(this.foodtruckId).id == DefaultValue.foodtruckData.id){
    // }
    
  }

  menuClicked(menuId: number){
    // this.pageCtrl.presentFoodtruck(this.foodtruckData.id, this.menuList[index].id);
    this.modalCtrl.create({
      component: MenuInfoPage,
      componentProps : {
        foodtruckId: this.foodtruckId,
        menuId: menuId
      },
      cssClass: "modal-fullscreen"
    }).then(r =>{
      r.present();
    })
  }

}
