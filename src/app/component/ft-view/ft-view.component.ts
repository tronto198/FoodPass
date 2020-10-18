import { Component, OnInit, Input } from '@angular/core';
import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { TagDistComponent } from '../tag-dist/tag-dist.component';



@Component({
  selector: 'comp-ft-view',
  templateUrl: './ft-view.component.html',
  styleUrls: ['./ft-view.component.scss'],
})

export class FtViewComponent implements OnInit {
  @Input() foodtruckId: number;
  @Input() index:number;

  constructor(private dataCtrl: FoodtruckDataCtrl) { }
  //foodtruck의 id가 있으면 foodtruckDataCtrl 을 다룰 수 있다.
  ngOnInit() {
  
  }

  get foodtruckData(): FoodtruckData {
    return this.dataCtrl.findFoodtruckById(this.foodtruckId)
  }

  get lat(): number{
    return this.foodtruckData.location.lat;
  }

  get lng(): number {
    return this.foodtruckData.location.lng;
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
  add(num1:number, num2:number):number{
    return (+num1) + (+num2)
  }
  get pot():string{
    var i:number='A'.charCodeAt(0)
    var char=String.fromCharCode(this.add(i,this.index))
   
    return char;
  }
 


}
