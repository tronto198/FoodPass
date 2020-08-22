import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-tag-waiting',
  templateUrl: './tag-waiting.component.html',
  styleUrls: ['./tag-waiting.component.scss'],
})
export class TagWaitingComponent {
  @Input() waitingTime : number;
  @Input() waitingPerson : number;
}
