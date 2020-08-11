import { TabHomeBasketCtrl } from './basket.ctrl';
import { TabHomeFoodtruckListCtrl } from './foodtruckList.ctrl';
import { CommunicationService } from 'src/app/services/communication/communication.service';

export class TabHomeData {
    basketCtrl : TabHomeBasketCtrl;
    foodtruckListCtrl: TabHomeFoodtruckListCtrl;
    
    constructor(dataCtrl : CommunicationService) {
      this.basketCtrl = new TabHomeBasketCtrl(dataCtrl);
      this.foodtruckListCtrl = new TabHomeFoodtruckListCtrl(dataCtrl);
    }

}