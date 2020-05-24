import { Injectable } from '@angular/core';
import { TabHomeData as TabHomeData } from './tab-home-data/TabHomeData';
import { TabOrderData } from './tab-order-data/TabOrderData';
import { DataControllerService } from '../data-controller/data-controller.service';

@Injectable()
export class PageDataStorageService {

  //---home
  tabHome : TabHomeData;

  //---order
  tabOrder : TabOrderData;

  
  constructor(dataCtrl : DataControllerService) {
    this.tabHome = new TabHomeData(dataCtrl);
    this.tabOrder = new TabOrderData(dataCtrl);
  }

}
