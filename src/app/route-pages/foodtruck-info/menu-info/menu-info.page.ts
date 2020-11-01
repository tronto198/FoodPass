import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { OptionData } from 'src/app/data/option';
import { PageControllerService } from 'src/app/services/page-controller.service';
import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';
import { BasketDataCtrl } from 'src/app/services/data-ctrl/basket.data.ctrl';
import { OptionDataProvider } from 'src/app/services/data-provider/option.data.provider';
import { MenuDataProvider } from 'src/app/services/data-provider/menu.data.provider';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'foodtruck-menuInfo',
  templateUrl: './menu-info.page.html',
  styleUrls: ['./menu-info.page.scss'],
})
export class MenuInfoPage implements OnInit {
  amount: number = 1;
  // price: number = 0;
  // checkedValue: number;
  // foodtruckData : FoodtruckData;
  // optionList : OptionData[];
  // menuData : MenuData;

  // todo 이를 modal로 만들어서 바로 접근하지 못하게 제한, 그리고 ft,menu id를 위에서 input으로 받아서 optiondata만 불러오도록 수정

  @Input() foodtruckId: number;
  @Input() menuId: number;
  @Input() Id:number;

  selectedOptionId: number;
  optionLoaded = false;

  constructor(
    private foodtruckDataCtrl: FoodtruckDataCtrl,
    private optionProvider: OptionDataProvider,
    private basketCtrl : BasketDataCtrl,
    private modalCtrl : ModalController,
  ) { }

  ngOnInit() {
    // this.getRoutingData();

    // this.optionListCtrl.getOptionList(this.foodtruckData.id, this.menuData.id);

    this.optionProvider.getListByFoodtruckMenuId(this.foodtruckId, this.menuId).then(r=>{
      this.foodtruckDataCtrl.setOptionData(this.foodtruckId, this.menuId, r)
      this.optionLoaded = true
      this.selectedOptionId = this.optionDataList[0].id;
    })

    // this.checkedValue = 1001;
  }

  get foodtruckData() {
    return this.foodtruckDataCtrl.findFoodtruckById(this.foodtruckId);
  }

  get menuData() {
    return this.foodtruckDataCtrl.findMenuById(this.foodtruckId, this.menuId);
  }

  get optionDataList() {
    return this.foodtruckDataCtrl.getOptionList(this.foodtruckId, this.menuId);
  }

  optionSelected(value: number){
    this.selectedOptionId = value
  }

  orderToBasket(){
    this.basketCtrl.push(this.foodtruckId, this.menuId, this.selectedOptionId, this.amount);
    // this.pageCtrl.presentFoodtruck(this.foodtruckData.id);
    this.dismiss();
  }


  dismiss(){
    this.modalCtrl.dismiss();
  }

}
