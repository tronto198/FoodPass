import { Injectable } from '@angular/core';
import { TabHomeData as TabHomeData } from './tab-home-data/TabHomeData';
import { TabOrderData } from './tab-order-data/TabOrderData';
import { DataControllerService } from '../data-controller/data-controller.service';
import { ConfigData } from './config-data/ConfigData';
import { UserConfigService } from '../../user-config/user-config.service';

@Injectable()
export class PageDataStorageService {

  //---user-config
  config : ConfigData;

  //---home
  tabHome : TabHomeData;

  //---order
  tabOrder : TabOrderData;

  
  constructor(userConfig : UserConfigService, dataCtrl : DataControllerService) {
    this.config = new ConfigData(userConfig, dataCtrl);
    this.tabHome = new TabHomeData(dataCtrl);
    this.tabOrder = new TabOrderData(dataCtrl);
  }

}
