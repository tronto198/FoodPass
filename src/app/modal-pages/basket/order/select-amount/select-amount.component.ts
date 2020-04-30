import { Component, OnInit } from '@angular/core';
import { BasketControllerService } from 'src/app/services/basket-controller/basket-controller.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'basket-select-amount',
  templateUrl: './select-amount.component.html',
  styleUrls: ['./select-amount.component.scss'],
})
export class SelectAmountComponent implements OnInit {
  foodtruckIndex : number;
  orderedMenuIndex : number;

  constructor(
    private basketCtrl : BasketControllerService,
    private popoverCtrl : PopoverController
  ) { }

  ngOnInit() {}

  get orderedMenuInfo(){
    return this.basketCtrl.basket[this.foodtruckIndex].orderedMenu[this.orderedMenuIndex];
  }

  get menuInfo(){
    return this.orderedMenuInfo.menuinfo;
  }

  get optionInfo(){
    return this.orderedMenuInfo.optioninfo;
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

  delete(){
    this.basketCtrl.basket[this.foodtruckIndex].deleteItem(this.orderedMenuInfo);
    this.dismiss();
  }


  dismiss(){
    this.popoverCtrl.dismiss();
  }
}
