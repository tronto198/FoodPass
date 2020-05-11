import { Component, OnInit, Input, Optional } from '@angular/core';
import { BasketControllerService } from 'src/app/services/basket-controller/basket-controller.service';
import { OrderedMenuData } from 'src/app/data/ordered-menu';
import { WaitingOrderControllerService } from 'src/app/services/waiting-order-controller/waiting-order-controller.service';
import { OrderType } from '../order-type.enum';
import { OrderControllerService } from '../order-controller/order-controller.service';
import { OptionData } from 'src/app/data/option';
import { MenuData } from 'src/app/data/menu';

@Component({
  selector: 'order-ordered-menu',
  templateUrl: './ordered-menu.component.html',
  styleUrls: ['./ordered-menu.component.scss'],
})
export class OrderedMenuComponent implements OnInit {
  @Input() orderIndex: number;
  @Input() orderedMenuIndex: number;

  constructor(
    private orderCtrl : OrderControllerService
  ) { }

  ngOnInit() { 
    
  }
  

  get orderedMenuInfo() : OrderedMenuData{
    return this.orderCtrl.items[this.orderIndex].orderedMenu[this.orderedMenuIndex];
  }
  get menuInfo() : MenuData{
    return this.orderedMenuInfo.menuinfo;
  }
  get optionInfo() : OptionData{
    return this.orderedMenuInfo.optioninfo;
  }

  get isBasket() : boolean{
    return this.orderCtrl.isBasket;
  }

  // get checkValue(){
  //   return this.orderedMenuInfo.checkValue;
  // }
  // set checkValue(b : boolean){
  //   this.orderedMenuInfo.value = b;
  // }


  get price() : number{
    return (this.menuInfo.price + this.optionInfo.extraPrice) * this.orderedMenuInfo.amount;
  }

  ctrlAmount(add : boolean){
    
    if(add){
      this.orderedMenuInfo.amount++;
    }
    else{
      if(this.orderedMenuInfo.amount > 1){
        this.orderedMenuInfo.amount--;
      }
    }
  }
}
