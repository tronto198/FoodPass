import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comp-tag-dist',
  templateUrl: './tag-dist.component.html',
  styleUrls: ['./tag-dist.component.scss'],
})
export class TagDistComponent implements OnInit {
  @Input() lat;
  @Input() lng;

  constructor() { }

  ngOnInit() {}

}
