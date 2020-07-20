import { Component, OnInit, Input } from '@angular/core';
import { DefaultValue } from 'src/environments/defaultValue';

@Component({
  selector: 'comp-ft-img',
  templateUrl: './ft-img.component.html',
  styleUrls: ['./ft-img.component.scss'],
})
export class FtImgComponent implements OnInit {

  @Input() foodtruckImgSrc = DefaultValue.foodtruckImgSrc
  @Input() foodtruckLat = null;
  @Input() foodtruckLng = null;
  @Input() toggleButton = true;
  imgToggle : boolean = true;

  constructor() { }

  ngOnInit() {}

  toggle(){
    if(this.toggleButton){
      this.imgToggle = !this.imgToggle
    }
  }
}
