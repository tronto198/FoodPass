import { Component, OnInit, Input } from '@angular/core';
import { BasketControllerService } from 'src/app/services/basket-controller/basket-controller.service';
import { MenuData } from 'src/app/data/menu';
import { OrderedMenuData } from 'src/app/data/ordered-menu';

@Component({
  selector: 'basket-ordered-menu',
  templateUrl: './ordered-menu.component.html',
  styleUrls: ['./ordered-menu.component.scss'],
})
export class OrderedMenuComponent implements OnInit {
  @Input() foodtruckIndex: number;
  @Input() orderedMenuIndex: number;

  constructor(
    private controller : BasketControllerService
  ) { }

  ngOnInit() {
    
  }

  checkboxClicked(){
    this.controller.basket[this.foodtruckIndex].toggleItem(this.orderedMenuIndex);
  }

  

  get orderedMenuInfo(){
    return this.controller.basket[this.foodtruckIndex].orderedMenu[this.orderedMenuIndex];
  }

  get menuInfo(){
    return this.orderedMenuInfo.menuinfo;
  }

  get checked(){
    return this.orderedMenuInfo.check;
  }

  set checked(b : boolean){
    this.orderedMenuInfo.check = b;
  }

  get optionInfo(){
    return this.orderedMenuInfo.optioninfo;
    // return this.controller.basket.get(this.foodtruckId).orderedMenu[this.orderedMenuIndex].optioninfo;
  }

  get price(){
    return this.menuInfo.price + this.optionInfo.extraPrice;
  }

}
