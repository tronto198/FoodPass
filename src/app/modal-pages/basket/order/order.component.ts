import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BasketControllerService } from 'src/app/services/basket-controller/basket-controller.service';
import { CheckboxValue } from 'src/app/data/checkbox-value';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  foodtruckName : string;
  menuList : string[];

  constructor(
    private controller : BasketControllerService
  ) { }

  ngOnInit() {
    this.foodtruckName = "testftname";
    this.menuList = ["tt", "dd", "ss"];
  }

  checkboxClicked(){
    this.controller.rootCheckboxValue.toggle();
  }

  // get allChecked(){
  //   return this.checkboxValues.allCheck;
  // }

  // set allChecked(checked : boolean){
  //   this.controller.allCheck = checked;
  //   if(this.controller.allCheck){
  //     this.controller.indeterminate = false;
  //   }

  //   this.foodtruckName = "test";
  // }

  // get indeterminate(){
  //   return this.controller.indeterminate;
  // }
  // set indeterminate(indeterminate : boolean){
  //   this.controller.indeterminate = indeterminate;
  // }

}
