import { Component, OnInit } from '@angular/core';
import { BasketControllerService } from 'src/app/services/basket-controller/basket-controller.service';

@Component({
  selector: 'order-ordered-menu',
  templateUrl: './ordered-menu.component.html',
  styleUrls: ['./ordered-menu.component.scss'],
})
export class OrderedMenuComponent implements OnInit {
  checked : boolean;
  menuName : string;
  optionList : string[];

  constructor(
    private controller : BasketControllerService
  ) { }

  ngOnInit() {
    this.menuName = "test menu";
    this.optionList = ["te", "tt", "dd"];
  }

}
