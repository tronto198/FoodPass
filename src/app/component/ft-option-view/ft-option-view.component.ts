import { Component, OnInit, Input } from '@angular/core';
import{FoodtruckDataCtrl} from 'src/app/services/data-ctrl/foodtruck.data.ctrl';
import { MenuData } from 'src/app/data/menu';
import { OptionData } from 'src/app/data/option';
@Component({
  selector: 'comp-ft-option',
  templateUrl: './ft-option-view.component.html',
  styleUrls: ['./ft-option-view.component.scss'],
})
export class FtOptionComponent implements OnInit {

@Input() foodtruckId:number;
@Input() menuId:number;
@Input() Id:number;
  constructor(private dataCtrl:FoodtruckDataCtrl) { }

  get optionInfo() : OptionData{
    return this.dataCtrl.findOptionById(this.foodtruckId, this.menuId, this.Id)
  }
  get name():string{
    return this.optionInfo.name
  }


  get extraPrice():number{
    return this.optionInfo.extraPrice
  }

  ngOnInit() {}

}
