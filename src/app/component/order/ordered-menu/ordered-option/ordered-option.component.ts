import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'order-ordered-option',
  templateUrl: './ordered-option.component.html',
  styleUrls: ['./ordered-option.component.scss'],
})
export class OrderedOptionComponent implements OnInit {
  optionName : string;
  oprionPrice : number = 1000;
  count : number = 1;

  constructor() { }

  ngOnInit() {}

}
