import { Injectable } from '@angular/core';
import { TabHomeData as TabHomeData } from './tab-home-data/TabHomeData';

@Injectable()
export class PageDataStorageService {

  //---home
  tabHome : TabHomeData;

  //---order
  //history
  //waiting

  
  constructor() {
    this.tabHome = new TabHomeData();
  }

}
