import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp-owner-cooking-view',
  templateUrl: './owner-cooking-view.component.html',
  styleUrls: ['./owner-cooking-view.component.scss'],
})
export class OwnerCookingViewComponent implements OnInit {
  // @Input() foodtruckId: number;
  front : boolean;
  menuList : number[];
  constructor() { }

  ngOnInit() {
    this.front =true;
    this.menuList=[1,2,3];
  }

  toggleFront(){
    this.front = !this.front;
  }

  isFront() : boolean{
    return this.front;
  }

  calltheConsumer(){
    alert("이 버튼을 누르면 손님에게 알림이 갈 예정입니다!");
  }

  // isSMapLooking(): boolean{
  //   return this.s_map;
  // }

  // toggleSMap(){
  //   this.s_map = !this.s_map;
  // }

  static(){}
  // get foodtruckData(): FoodtruckData {
  //   return this.dataCtrl.findFoodtruckById(this.foodtruckId)
  // }
}
