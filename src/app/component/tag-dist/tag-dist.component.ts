import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'comp-tag-dist',
  templateUrl: './tag-dist.component.html',
  styleUrls: ['./tag-dist.component.scss'],
})

export class TagDistComponent implements OnInit {
  @Input() lat:number;
  @Input() lng:number;
  @Output() tag_dist:number;
  constructor() { 
  
  }

  //우선 임시로 만들어놈 ->나중에 거리계산해서 넣어야함.
 
  get dist():number{
    return  this.lat+this.lng
  }
  ngOnInit() {}

}
