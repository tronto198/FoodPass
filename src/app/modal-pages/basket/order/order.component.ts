import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BasketControllerService } from 'src/app/services/basket-controller/basket-controller.service';
import { CheckboxValue } from 'src/app/data/checkbox-value';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { OrderData } from 'src/app/data/order';

@Component({
  selector: 'basket-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  @Input() foodtruckIndex : number;

  constructor(
    private controller : BasketControllerService
  ) { }

  ngOnInit() {
  }

  checkboxClicked(){
    this.controller.toggleItem(this.foodtruckIndex);
  }

  get foodtruckInfo(){
    return this.controller.basket[this.foodtruckIndex].foodtruckinfo;
  }

  get order(){
    return this.controller.basket[this.foodtruckIndex];
  }

  get checked(){
    return this.order.allCheck
  }

  set checked(checked : boolean){
    this.order.allCheck = checked;
  }

  get indeterminated(){
    return this.order.indeterminate;
  }

  get menuList(){
    return this.order.orderedMenu;
  }

}
