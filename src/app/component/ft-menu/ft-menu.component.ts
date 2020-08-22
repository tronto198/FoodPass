import { Component, OnInit, Input } from '@angular/core';
import{FoodtruckDataCtrl} from 'src/app/services/data-ctrl/foodtruck.data.ctrl';
import { MenuData } from 'src/app/data/menu';
@Component({
  selector: 'app-ft-menu',
  templateUrl: './ft-menu.component.html',
  styleUrls: ['./ft-menu.component.scss'],
})
export class FtMenuComponent implements OnInit {

@Input() foodtruckId:number;
@Input() menuId:number;
  constructor(private dataCtrl:FoodtruckDataCtrl) { }

  get menuInfo() : MenuData{
    return {
      id:0,
      menuName:"menuName",
      menuInformation:"menuInform",
      price:5000,

    }
    //return this.dataCtrl.findMenuById(this.foodtruckId, this.menuId)
  }
  get name():string{
    return this.menuInfo.menuName
  }


  get price():number{
    return this.menuInfo.price
  }

  ngOnInit() {}

}
