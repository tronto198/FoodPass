import { Component, OnInit, Input } from '@angular/core';
import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { OptionData } from 'src/app/data/option';
import { OrderData } from 'src/app/data/order';
import { BasketDataCtrl } from 'src/app/services/data-ctrl/basket.data.ctrl';
import { BasketOrder } from 'src/app/data/basket-data/basket-order';

@Component({
  selector: 'comp-ft-basket-view',
  templateUrl: './ft-basket-view.component.html',
  styleUrls: ['./ft-basket-view.component.scss'],
})
export class FtBasketViewComponent implements OnInit {
  @Input() foodtruckId: number;

  constructor(
    private basketCtrl: BasketDataCtrl,
    private dataCtrl: FoodtruckDataCtrl,
    ) { }

  ngOnInit() {

  }

  get menuList(){
    return this.basketCtrl.getOrder(this.foodtruckId).orderedMenu
  }

  
}
