import { Component, OnInit, Input } from '@angular/core';
import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { OptionData } from 'src/app/data/option';

@Component({
  selector: 'app-ft-basket-view',
  templateUrl: './ft-basket-view.component.html',
  styleUrls: ['./ft-basket-view.component.scss'],
})
export class FtBasketViewComponent implements OnInit {
  @Input() foodtruckId: number;
  @Input() menuId: number;
  @Input() optionId: number;

  constructor(private dataCtrl: FoodtruckDataCtrl) { }
  ngOnInit() {}

  get foodtruckData(): FoodtruckData {
    return this.dataCtrl.findFoodtruckById(this.foodtruckId)
  }

  get menuData(): MenuData {
    return this.dataCtrl.findMenuById(this.foodtruckId, this.menuId)
  }

  get optionData(): OptionData {
    return this.dataCtrl.findOptionById(this.foodtruckId, this.menuId, this.optionId)
  }

  calcTotalPrice(){

  }
  
}
