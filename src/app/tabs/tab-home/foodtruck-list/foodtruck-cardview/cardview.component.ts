import { Component, OnInit, Input } from '@angular/core';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.scss'],
})
export class CardviewComponent implements OnInit {

  @Input() foodtruckIndex : number;

  constructor(private pageData : PageDataStorageService,
    ) { }

  ngOnInit() {
    
  }

  get foodtruckInfo() : FoodtruckData{
    return this.pageData.tabHome.foodtruckListCtrl.foodtruckList[this.foodtruckIndex];
  }

  get name() {
    return this.foodtruckInfo.name;
  }

  get locate(){
    return this.foodtruckInfo.locate;
  }

  get inform(){
    return this.foodtruckInfo.information;
  }

  get waiting(){
    return this.foodtruckInfo.wating.person;
  }

  get grade(){
    return this.foodtruckInfo.rating;
  }

  get notice(){
    return this.foodtruckInfo.notice;
  }

  get distance(){
    return this.foodtruckInfo.distance;
  }

  get truckImage(){
    return this.foodtruckInfo.imgSrc;
  }


}
