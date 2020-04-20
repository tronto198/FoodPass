import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'order-ordered-menu',
  templateUrl: './ordered-menu.component.html',
  styleUrls: ['./ordered-menu.component.scss'],
})
export class OrderedMenuComponent implements OnInit {
  checked : boolean;
  menuName : string;
  optionList : string[];

  constructor() { }

  ngOnInit() {}

}
