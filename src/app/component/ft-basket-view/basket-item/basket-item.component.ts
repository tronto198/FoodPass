import { Component, Input, OnInit } from '@angular/core';
import { MenuData } from 'src/app/data/menu';
import { OptionData } from 'src/app/data/option';

@Component({
  selector: 'basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss'],
})
export class BasketItemComponent implements OnInit {
  isChecked: boolean;
  @Input() menuData : MenuData[];
  @Input() optionData : OptionData[];
  
  count : number;
  
  constructor() { 
  }

  ngOnInit() {
    this.count =1;
    this.isChecked = false;
  }

  get price():number{
    return 0;
    // return this.menuData.price + this.optionData[0].extraPrice;
  }

  get optionName():string{
    return this.optionData[0].name;
  }

  

  addCount(){
    this.count++;
  }

  subCount(){
    if(this.count>1) this.count--;
  }

}
