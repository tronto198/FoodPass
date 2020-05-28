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

  get locate() : string{
    return this.foodtruckInfo.localData? this.foodtruckInfo.localData.sign : '';
  }

  get inform(){
    return this.foodtruckInfo.information;
  }

  get waiting(){
    return this.foodtruckInfo.wating.person;
  }

  get rating() : number{
    return this.foodtruckInfo.rating ? this.foodtruckInfo.rating : 0;
  }

  get notice() : string{
    return this.foodtruckInfo.notice;
  }

  get distance() : string {
    return this.foodtruckInfo.localData ? String(this.foodtruckInfo.localData.distance) : '';
  }

  get truckImage() : string{
    return this.foodtruckInfo.imgSrc;
  }


}
