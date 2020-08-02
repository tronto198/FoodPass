import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageControllerService } from 'src/app/services/page-controller.service';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { DefaultValue } from 'src/environments/defaultValue';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'foodtruck-foodtruckInfo',
  templateUrl: './foodtruck-info.page.html',

  styleUrls: ['./foodtruck-info.page.scss'],
})
export class FoodtruckInfoPage implements OnInit  {
  
  constructor(
    private route : ActivatedRoute,
    private pageCtrl : PageControllerService,
    private pageData : PageDataStorageService,
    private modalCtrl : ModalController,
  ) { }

  ngOnInit() {
    this.getBaseData();
    this.pageData.modal.menuListCtrl.getMenuList(this.foodtruckData.id);
  }

  get foodtruckData() : FoodtruckData{
    return this.pageData.modal.foodtruckInfoCtrl.currentFoodtruck;
  }

  // get foodtruckName() : string {
  //   return this.foodtruckData.name;
  // }

  get foodtruckImage() : string {
    return this.foodtruckData.imgSrc? this.foodtruckData.imgSrc : DefaultValue.foodtruckImgSrc;
  }

  get menuList() : MenuData[]{
    return this.pageData.modal.menuListCtrl.menuList;
  }

  getMenuImg(i : number) : string {
    return this.menuList[i].imgsrc? this.menuList[i].imgsrc : DefaultValue.MenuImgSrc;
  }

  getBaseData(){
    //여기에서 foodtruckinfo 가 있는지 보고
    // 없으면 getRoutingData로 foodtruckinfo를 웹에서 받아오기
    // 있으면 생략
    if(this.foodtruckData == undefined){
      this.getRoutingData();
    }
  }

  getRoutingData(){
    let foodtruckId = Number(this.route.snapshot.paramMap.get("id"));
    if(isNaN(foodtruckId)){
      this.pageCtrl.routingHome();
    }
    this.pageData.modal.foodtruckInfoCtrl.getFoodtruckData(foodtruckId);
  }

  menuClicked(index: number){
    this.pageCtrl.presentFoodtruck(this.foodtruckData, this.menuList[index]);
  }

}
