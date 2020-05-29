import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'component-order-waiting',
  templateUrl: './order-waiting.component.html',
  styleUrls: ['./order-waiting.component.scss'],
})
export class OrderWaitingComponent implements OnInit {
  @Input() waitingTime;
  @Input() waitingPerson;

  constructor() {
   }

  ngOnInit() {
  }

}
