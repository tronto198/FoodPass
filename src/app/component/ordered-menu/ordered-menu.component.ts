import { Component, OnInit, Input, Optional } from '@angular/core';
import { BasketControllerService } from 'src/app/services/basket-controller/basket-controller.service';
import { OrderedMenuData } from 'src/app/data/ordered-menu';
import { WaitingOrderControllerService } from 'src/app/services/waiting-order-controller/waiting-order-controller.service';
import { MenuType } from './menu-type.enum';

@Component({
  selector: 'component-ordered-menu',
  templateUrl: './ordered-menu.component.html',
  styleUrls: ['./ordered-menu.component.scss'],
})
export class OrderedMenuComponent implements OnInit {
  @Input() menuType: MenuType;
  @Input() foodtruckIndex?: number = undefined;
  @Input() orderedMenuIndex: number;

  constructor(
    @Optional() private basketCtrl : BasketControllerService,
    @Optional() private waitingorderCtrl : WaitingOrderControllerService
  ) { }

  ngOnInit() {  }
  

  get orderedMenuInfo() : OrderedMenuData{
    let data : OrderedMenuData = null;
    // if(this.foodtruckIndex == undefined){

    // }
    // else{
    //   data = this.basketCtrl.basket[this.foodtruckIndex].orderedMenu[this.orderedMenuIndex];
    // }

    if(this.menuType == MenuType.basket){
      data = this.basketCtrl.basket[this.foodtruckIndex].orderedMenu[this.orderedMenuIndex];
    }
    else if(this.menuType == MenuType.waiting){
      data = this.waitingorderCtrl.orderList[this.foodtruckIndex].orderedMenu[this.orderedMenuIndex];
    }

    return data;
  }
  get menuInfo(){
    return this.orderedMenuInfo.menuinfo;
  }
  get optionInfo(){
    return this.orderedMenuInfo.optioninfo;
  }

  // get checkValue(){
  //   return this.orderedMenuInfo.checkValue;
  // }
  // set checkValue(b : boolean){
  //   this.orderedMenuInfo.value = b;
  // }


  get price(){
    return (this.menuInfo.price + this.optionInfo.extraPrice) * this.orderedMenuInfo.amount;
  }

  ctrlAmount(event : Event, add : boolean){
    console.log(add);
    event.stopPropagation();
    
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
