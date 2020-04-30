import { Component, OnInit, Input } from '@angular/core';
import { BasketControllerService } from 'src/app/services/basket-controller/basket-controller.service';
import { MenuData } from 'src/app/data/menu';
import { PopoverController } from '@ionic/angular';
import { SelectAmountComponent } from '../select-amount/select-amount.component';

@Component({
  selector: 'basket-ordered-menu',
  templateUrl: './ordered-menu.component.html',
  styleUrls: ['./ordered-menu.component.scss'],
})
export class OrderedMenuComponent implements OnInit {
  @Input() foodtruckIndex: number;
  @Input() orderedMenuIndex: number;

  constructor(
    private basketCtrl : BasketControllerService,
    private popoverCtrl : PopoverController 
  ) { }

  ngOnInit() {  }
  

  get orderedMenuInfo(){
    return this.basketCtrl.basket[this.foodtruckIndex].orderedMenu[this.orderedMenuIndex];
  }
  get menuInfo(){
    return this.orderedMenuInfo.menuinfo;
  }
  get optionInfo(){
    return this.orderedMenuInfo.optioninfo;
  }

  get checkValue(){
    return this.orderedMenuInfo.checkValue;
  }
  set checkValue(b : boolean){
    this.orderedMenuInfo.value = b;
  }


  get price(){
    return (this.menuInfo.price + this.optionInfo.extraPrice) * this.orderedMenuInfo.amount;
  }

  popoverAmountSelect(ev){
    console.log(ev);
    this.popoverCtrl.create({
      component: SelectAmountComponent,
      componentProps: {
        foodtruckIndex: this.foodtruckIndex,
        orderedMenuIndex: this.orderedMenuIndex
      },
      event: ev,
      translucent: true
    }).then(val =>{
      val.present();
    });
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

  delete(){
    this.basketCtrl.basket[this.foodtruckIndex].deleteItem(this.orderedMenuInfo);
  }

}
