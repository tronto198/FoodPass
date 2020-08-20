import { Component, OnInit, Input } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { distance } from 'src/app/services/map/map.utility';

@Component({
  selector: 'comp-tag-dist',
  templateUrl: './tag-dist.component.html',
  styleUrls: ['./tag-dist.component.scss'],
})
export class TagDistComponent implements OnInit {
  @Input() lat;
  @Input() lng;

  constructor(private sharedData: SharedDataService) { }

  ngOnInit() {}

  get distance(){
    if(this.sharedData.geolocation.isMyLocation)
      return distance({lat: this.lat, lng: this.lng}, this.sharedData.geolocation.currentLocation)
  }

}
