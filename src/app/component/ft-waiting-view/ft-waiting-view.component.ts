import { Component, OnInit, Input } from '@angular/core';

import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { OptionData } from 'src/app/data/option';
import { StaticMapComponent } from '../static-map/static-map.component';

@Component({
  selector: 'app-ft-waiting-view',
  templateUrl: './ft-waiting-view.component.html',
  styleUrls: ['./ft-waiting-view.component.scss'],
})
export class FtWaitingViewComponent implements OnInit {
  @Input() foodtruckId: number;
  @Input() menuId: number;
  @Input() optionId: number;
  staticMap : StaticMapComponent;

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
  
}
