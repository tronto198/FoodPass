import { Component, OnInit, Input } from '@angular/core';
import { DefaultValue } from 'src/environments/defaultValue';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';

@Component({
  selector: 'comp-ft-img',
  templateUrl: './ft-img.component.html',
  styleUrls: ['./ft-img.component.scss'],
})
export class FtImgComponent implements OnInit {

  @Input() foodtruckId: number;
  @Input() toggleButton = true;
  imgToggle : boolean = true;

  constructor(private dataCtrl: FoodtruckDataCtrl) { }

  ngOnInit() {}

  toggle(){
    if(this.toggleButton){
      this.imgToggle = !this.imgToggle
    }
  }

  get foodtruckData() : FoodtruckData {
    return this.dataCtrl.findFoodtruckById(this.foodtruckId)
  }

  get foodtruckImgSrc() : string {
   
    return this.foodtruckData.imgSrc ? this.foodtruckData.imgSrc : DefaultValue.foodtruckImgSrc;
  }
}
