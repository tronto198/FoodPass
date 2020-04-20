import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  foodtruckName : string;
  menuList : string[];

  constructor() { }

  ngOnInit() {
    this.foodtruckName = "testftname";
    this.menuList = ["tt", "dd", "ss"];
  }

}
