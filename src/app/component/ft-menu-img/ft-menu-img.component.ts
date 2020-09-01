import { Component, OnInit, Input } from '@angular/core';
import{FoodtruckDataCtrl} from 'src/app/services/data-ctrl/foodtruck.data.ctrl';
import { MenuData } from 'src/app/data/menu';
import { DefaultValue } from 'src/environments/defaultValue';
@Component({
  selector: 'app-ft-menu-img',
  templateUrl: './ft-menu-img.component.html',
  styleUrls: ['./ft-menu-img.component.scss'],
})
export class FtMenuImgComponent implements OnInit {

  @Input() foodtruckId:number;
  @Input() menuId:number;
    constructor(private dataCtrl:FoodtruckDataCtrl) { }

    get menuInfo() : MenuData{
      return this.dataCtrl.findMenuById(this.foodtruckId, this.menuId)
    }
    get imgSrc():string{
      return this.menuInfo.imgsrc ? this.menuInfo.imgsrc: DefaultValue.MenuImgSrc
    }

  ngOnInit() {}

}
