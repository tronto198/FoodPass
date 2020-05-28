import { Component, OnInit, Input } from '@angular/core';
import { OrderedMenuData } from 'src/app/data/ordered-menu';
import { OptionData } from 'src/app/data/option';
import { MenuData } from 'src/app/data/menu';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { orderListComponent } from '../orderList.component';

@Component({
  selector: 'order-ordered-menu',
  templateUrl: './ordered-menu.component.html',
  styleUrls: ['./ordered-menu.component.scss'],
})
export class OrderedMenuComponent extends orderListComponent implements OnInit {
  @Input() orderType: number;
  @Input() orderIndex: number;
  @Input() orderedMenuIndex: number;

  constructor(
    pageData : PageDataStorageService,
  ) { 
    super(pageData);
  }

  ngOnInit() { 
    
  }
  

  get orderedMenuInfo() : OrderedMenuData{
    return this.orderList[this.orderIndex].orderedMenu[this.orderedMenuIndex];
  }
  get menuInfo() : MenuData{
    // console.log(this.orderedMenuInfo.menuinfo);
    return this.orderedMenuInfo.menuinfo;
  }
  get optionInfo() : OptionData{
    return this.orderedMenuInfo.optioninfo;
  }

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
