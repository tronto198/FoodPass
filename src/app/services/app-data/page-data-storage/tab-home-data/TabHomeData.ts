import { TabHomeBasketCtrl } from './basket.ctrl';
import { TabHomeFoodtruckListCtrl } from './foodtruckList.ctrl';
import { DataControllerService } from '../../data-controller/data-controller.service';
import { TabHomeMapCtrl } from './map.ctrl';

export class TabHomeData {
    basketCtrl : TabHomeBasketCtrl;
    foodtruckListCtrl: TabHomeFoodtruckListCtrl;
    // locationCtrl: TabHomeLocationCtrl;
    mapCtrl : TabHomeMapCtrl;
    
    constructor(dataCtrl : DataControllerService) {
      this.basketCtrl = new TabHomeBasketCtrl(dataCtrl);
      this.foodtruckListCtrl = new TabHomeFoodtruckListCtrl(dataCtrl);
      // this.locationCtrl = new TabHomeLocationCtrl();
      this.mapCtrl = new TabHomeMapCtrl(dataCtrl);
    }

}