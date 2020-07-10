import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocationData } from 'src/app/data/location';

@Component({
  selector: 'search-resultItem',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent implements OnInit {
  @Input() lat;
  @Input() lng;
  @Output() selected = new EventEmitter<LocationData>();

  constructor() { }

  ngOnInit() {}

  clicked(){
    this.selected.emit({lat: this.lat, lng: this.lng});
  }

}
