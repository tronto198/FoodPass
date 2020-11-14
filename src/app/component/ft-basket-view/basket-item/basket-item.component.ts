import { Component, Input, OnInit } from '@angular/core';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { OptionData } from 'src/app/data/option';
import { BasketDataCtrl } from 'src/app/services/data-ctrl/basket.data.ctrl';
import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';

@Component({
  selector: 'basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss'],
})
export class BasketItemComponent implements OnInit {
  @Input() foodtruckId: number;
  @Input() index: number;

  constructor(
    private dataCtrl: FoodtruckDataCtrl,
    private basketCtrl: BasketDataCtrl,
  ) { 
  }

  ngOnInit() {
  }

  get orderedMenuInfo(){
    return this.basketCtrl.getOrder(this.foodtruckId).orderedMenu[this.index];
  }

  get menuInfo(){
    return this.dataCtrl.findMenuById(this.foodtruckId, this.orderedMenuInfo.menuId);
  }

  get optionInfo() {
    return this.dataCtrl.findOptionById(this.foodtruckId, this.orderedMenuInfo.menuId, this.orderedMenuInfo.optionId);
  }

  get amount() {
    return this.orderedMenuInfo.amount;
  }

  set amount(val: number){
    this.orderedMenuInfo.amount = val;
  }

  get price(){
    return this.amount * (this.menuInfo.price + this.optionInfo.extraPrice)
  }
  

  addCount(){
    this.amount++;
  }

  subCount(){
    if(this.amount>1) this.amount--;
  }

}
