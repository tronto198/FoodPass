import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.scss'],
})
export class CardviewComponent implements OnInit {
  
  @Input() name:string;
  @Input() locate:string;
  @Input() inform:string;
  @Input() wating: number;
  @Input() grade:number;
  @Input() notice:string;
  @Input() distance:number;
  @Input() truckImage: string;

  constructor() { }

  ngOnInit() {
    
    
  }

}
