import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comp-tag-waiting',
  templateUrl: './tag-waiting.component.html',
  styleUrls: ['./tag-waiting.component.scss'],
})
export class TagWaitingComponent implements OnInit {
  @Input() waitingTime;
  @Input() waitingPerson;

  constructor() {
   }

  ngOnInit() {
  }

}
