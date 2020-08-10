import { Component, OnInit, Input } from '@angular/core';
import { MenuData } from 'src/app/data/menu';
import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';

@Component({
  selector: 'foodtruckInfo-menuList',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  @Input() foodtruckId: number;
  @Input() menuId:number;

  constructor(private dataCtrl: FoodtruckDataCtrl) { 
  
  }

  ngOnInit() {}

  get menuData() : MenuData {
    return this.dataCtrl.findMenuById(this.foodtruckId, this.menuId);
  }

  get name() : string {
    return this.menuData.menuName;
  }

  get inform() : string {
    return this.menuData.menuInformation
  }

  get price() : number {
    return this.menuData.price;
  }

  get menuImage() : string {
    return this.menuData.imgsrc;
  }
  
}
