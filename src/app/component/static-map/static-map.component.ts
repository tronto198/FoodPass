import { Component, OnInit, Input } from '@angular/core';
import { DefaultValue } from 'src/environments/defaultValue';
import { LocationDataToPoint } from 'src/app/services/map/map.utility';

@Component({
  selector: 'comp-static-map',
  templateUrl: './static-map.component.html',
  styleUrls: ['./static-map.component.scss'],
})
export class StaticMapComponent implements OnInit {
  @Input() lat;
  @Input() lng;
  map = null;
  valueProvided = false;
  staticMap = null;

  constructor() { }

  ngOnInit() {
    if(this.lat == null || this.lng == null)
      return;
    this.valueProvided = true;
    this.map = document.getElementById('staticmap');
    const center = LocationDataToPoint({lat: this.lat, lng: this.lng});

    const staticMapOption = {
      center: center,
      marker: {
        position: center
      }
    };

    this.staticMap = createStaticMap(this.map, staticMapOption);
  }

  get defaultImgSrc(){
    return DefaultValue.mapImgSrc;
  }
}
