import { Component, OnInit, Input } from '@angular/core';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';

@Component({
  selector: 'app-owner-account-view',
  templateUrl: './owner-account-view.component.html',
  styleUrls: ['./owner-account-view.component.scss'],
})
export class OwnerAccountViewComponent implements OnInit {

  @Input() foodtruckId: number;
 
  constructor(private dataCtrl: FoodtruckDataCtrl) { }
//foodtruck의 id가 있으면 foodtruckDataCtrl 을 다룰 수 있다.
  ngOnInit() {}

  get foodtruckData(): FoodtruckData {
    return {
      id: 0,
      name: "name",
      introduction: " into",
      notice: "notice"
    }
    //return this.dataCtrl.findFoodtruckById(this.foodtruckId)
  }

  get name():string{
    return this.foodtruckData.name
  }
  get introduction():string{
    return this.foodtruckData.introduction
  }
  get notice():string{
    return this.foodtruckData.notice
  }

}
