import { Component, Input, OnInit } from '@angular/core';
import { OrderHistoryData } from 'src/app/data/order-history';
import { HistoryDataCtrl } from 'src/app/services/data-ctrl/history.data.ctrl';

@Component({
  selector: 'comp-ft-orderhistory-view',
  templateUrl: './ft-orderhistory-view.component.html',
  styleUrls: ['./ft-orderhistory-view.component.scss'],
})
export class FtOrderhistoryViewComponent implements OnInit {

  @Input() ohData:OrderHistoryData;
  constructor(private dataCtrl:HistoryDataCtrl ) { }
  ngOnInit() {}

  /*get orderHistoryData():OrderHistoryData{
    return this.dataCtrl.getItem(this.id)
  }*/

  get foodtruckName():string{
    return this.ohData.foodtruckInfo.name
  }

  get foodtruckInform():string{
    return this.ohData.foodtruckInfo.introduction
  }
  get price():number{
    return this.ohData.price
  }

}
