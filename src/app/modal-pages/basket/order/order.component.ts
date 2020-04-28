import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BasketControllerService } from 'src/app/services/basket-controller/basket-controller.service';
import { CheckboxValue } from 'src/app/data/checkbox-value';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { OrderData } from 'src/app/data/order';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'basket-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  @Input() foodtruckIndex : number;

  constructor(
    private basketCtrl : BasketControllerService
  ) { }

  ngOnInit() {
  }

  get foodtruckInfo(){
    return this.basketCtrl.basket[this.foodtruckIndex].foodtruckinfo;
  }

  get order(){
    return this.basketCtrl.basket[this.foodtruckIndex];
  }

  get checkValue(){
    return this.order.checkValue
  }

  set checkValue(checked : boolean){
    this.order.value = checked;
  }

  get indeterminated(){
    return this.order.indeterminate;
  }

  get menuList(){
    return this.order.orderedMenu;
  }

  get price(){
    return this.order.price;
  }

  checkValueToggle(){
    this.order.toggle();
  }

  test(){
    this.foodtruckInfo.name = "testestes";
  }
}
