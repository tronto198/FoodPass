import { Component, OnInit, Input } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { distance } from 'src/app/services/map/map.utility';

@Component({
  selector: 'comp-tag-dist',
  templateUrl: './tag-dist.component.html',
  styleUrls: ['./tag-dist.component.scss'],
})

export class TagDistComponent implements OnInit {
  @Input() lat:number;
  @Input() lng:number;

  constructor(private sharedData: SharedDataService) { }

  //우선 임시로 만들어놈 ->나중에 거리계산해서 넣어야함.
 
  // get dist():number{
  //   return  this.lat+this.lng
  // }
  ngOnInit() {}

  get distance():number{
    if(this.sharedData.geolocation.isMyLocation)
      return distance({lat: this.lat, lng: this.lng}, this.sharedData.geolocation.currentLocation)
  }

}
