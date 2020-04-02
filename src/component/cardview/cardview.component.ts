import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.scss'],
})
export class CardviewComponent implements OnInit {
  @Input() str : string; // HELLO
  constructor() { }

  ngOnInit() {
    this.str = "cardview " + this.str;
  }

}
