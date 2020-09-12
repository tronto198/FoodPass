import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { OrderType } from './order-type.enum';
import { WaitingData } from 'src/app/data/waiting';

@Component({
  selector: 'component-order-cardview',
  templateUrl: './order-cardview.component.html',
  styleUrls: ['./order-cardview.component.scss'],
})
export class OrderCardviewComponent {
  @Input() orderType : OrderType;
  @Input() orderIndex : number;

  @Output() received = new EventEmitter<number>();
  @Output() giveRating = new EventEmitter<number>();

  constructor(
  ) {
  }


  ngOnInit() {
  }



  orderReceived(){
    //받앗어요
    console.log(`receivedOrder : ${this.orderIndex}`);
    this.received.emit(this.orderIndex);
  }

  rating(){
    console.log(`rating`);
    this.giveRating.emit(this.orderIndex);
  }

}
