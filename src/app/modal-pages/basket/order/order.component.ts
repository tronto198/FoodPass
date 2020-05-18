import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BasketControllerService } from 'src/app/tabs/tab-home/basket-controller/basket-controller.service';
import { OrderedMenuData } from 'src/app/data/ordered-menu';
import { OrderType } from 'src/app/component/order-cardview/order-type.enum';

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

  deleteItem(index : number){
    this.basketCtrl.basket[this.foodtruckIndex].deleteItem(this.order.items[index]);
  }

  get menuType(){
    return OrderType.basket;
  }
  // ctrlItemAmount(menuIndex: number, add : boolean){

  //   let menu : OrderedMenuData = this.order.orderedMenu[menuIndex];
    
  //   if(add){
  //     menu.amount++;
  //   }
  //   else{
  //     if(menu.amount > 1){
  //       menu.amount--;
  //     }
  //   }
  // }
}
