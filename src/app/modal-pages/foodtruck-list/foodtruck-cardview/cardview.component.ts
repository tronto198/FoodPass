import { Component, OnInit, Input } from '@angular/core';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { WaitingData } from 'src/app/data/waiting';
import { DefaultValue } from 'src/environments/defaultValue';

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

  get name() : string {
    return this.foodtruckInfo.name;
  }

  get sign() : string{
    return this.foodtruckInfo.localData? this.foodtruckInfo.localData.sign : '';
  }
  get distance() : string {
    return this.foodtruckInfo.localData.distance ? String(this.foodtruckInfo.localData.distance) + 'm' : '';
  }

  get inform() : string{
    return this.foodtruckInfo.introduction;
  }

  get waiting() : WaitingData{
    return this.foodtruckInfo.waiting? this.foodtruckInfo.waiting : {time: 0, person: 0};
  }

  get rating() : number{
    return this.foodtruckInfo.rating ? this.foodtruckInfo.rating : 0;
  }

  get notice() : string{
    return this.foodtruckInfo.notice;
  }



  get truckImage() : string{
    return this.foodtruckInfo.imgSrc? this.foodtruckInfo.imgSrc : DefaultValue.foodtruckImgSrc;
  }


}
