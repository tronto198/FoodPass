import { Component, OnInit, Input } from '@angular/core';
import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { OptionData } from 'src/app/data/option';
import { OrderData } from 'src/app/data/order';

@Component({
  selector: 'comp-ft-basket-view',
  templateUrl: './ft-basket-view.component.html',
  styleUrls: ['./ft-basket-view.component.scss'],
})
export class FtBasketViewComponent implements OnInit {
  @Input() foodtruckId: number;
  total_price : number;
  optionData: OptionData[];
  menuData: MenuData[];


  constructor(private dataCtrl: FoodtruckDataCtrl) { }

  ngOnInit() {
    this.total_price =0;
    this.optionData=[{
      id: 0,
      name: "opt1",
      extraPrice:500
    },
    {
      id: 1,
      name: "opt2",
      extraPrice:1000
    }];

    this.menuData=[{
      id: 0,
      menuName: "menu1",
      price:4000
    },
    {
      id: 1,
      menuName: "menu2",
      price: 5000
    }];
  }


  get menuName():string{
    return this.menuData[0].menuName;
  }

 

  get totalPrice(): number{

    // if (this.isChecked) this.total_price = this.count * this.price;
    // else  this.total_price =0;
    return this.total_price =0 ;
  }
  
}
