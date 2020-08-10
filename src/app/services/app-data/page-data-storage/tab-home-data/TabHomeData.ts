import { TabHomeBasketCtrl } from './basket.ctrl';
import { TabHomeFoodtruckListCtrl } from './foodtruckList.ctrl';
import { TabHomeMapCtrl } from './map.ctrl';
import { CommunicationService } from 'src/app/services/communication/communication.service';

export class TabHomeData {
    basketCtrl : TabHomeBasketCtrl;
    foodtruckListCtrl: TabHomeFoodtruckListCtrl;
    // locationCtrl: TabHomeLocationCtrl;
    mapCtrl : TabHomeMapCtrl;
    
    constructor(dataCtrl : CommunicationService) {
      this.basketCtrl = new TabHomeBasketCtrl(dataCtrl);
      this.foodtruckListCtrl = new TabHomeFoodtruckListCtrl(dataCtrl);
      // this.locationCtrl = new TabHomeLocationCtrl();
      this.mapCtrl = new TabHomeMapCtrl(dataCtrl);
    }

}