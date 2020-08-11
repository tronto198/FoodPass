import { Component, OnInit, Input } from '@angular/core';

import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';
import { FoodtruckData } from 'src/app/data/foodtruck';

@Component({
  selector: 'app-ft-waiting-view',
  templateUrl: './ft-waiting-view.component.html',
  styleUrls: ['./ft-waiting-view.component.scss'],
})
export class FtWaitingViewComponent implements OnInit {
  @Input() foodtruckId: number;
  constructor(private dataCtrl: FoodtruckDataCtrl) { }

  ngOnInit() {}

  
  get foodtruckData(): FoodtruckData {
    return this.dataCtrl.findFoodtruckById(this.foodtruckId)
  }

}
