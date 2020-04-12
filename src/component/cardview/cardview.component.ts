import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.scss'],
})
export class CardviewComponent implements OnInit {
  @Input() str:string;
  @Input() foodtruckList : string;
  @Input() wating: string;
  constructor() { }

  ngOnInit() {
    //this.str;
    
  }

}
