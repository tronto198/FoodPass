import { Component, OnInit, Input } from '@angular/core';

import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';

@Component({
  selector: 'app-ft-waiting-view',
  templateUrl: './ft-waiting-view.component.html',
  styleUrls: ['./ft-waiting-view.component.scss'],
})
export class FtWaitingViewComponent implements OnInit {
  // @Input() foodtruckId: number;
  front : boolean;
  s_map : boolean;
  constructor(private dataCtrl: FoodtruckDataCtrl) { }

  ngOnInit() {
    this.front =true;
    this.s_map =true;
  }

  toggleFront(){
    this.front = !this.front;
  }

  isFront() : boolean{
    return this.front;
  }

  // isSMapLooking(): boolean{
  //   return this.s_map;
  // }

  // toggleSMap(){
  //   this.s_map = !this.s_map;
  // }

  static(){}
  // get foodtruckData(): FoodtruckData {
  //   return this.dataCtrl.findFoodtruckById(this.foodtruckId)
  // }

}
