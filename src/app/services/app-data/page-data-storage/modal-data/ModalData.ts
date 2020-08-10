import { ModalFoodtruckInfoCtrl } from './FoodtruckInfo.ctrl';
import { ModalMenuListCtrl } from './menuList.ctrl';
import { ModalOptionListCtrl } from './optionList.ctrl';
import { SearchDataCtrl } from './search.ctrl';
import { CommunicationService } from 'src/app/services/communication/communication.service';

export class ModalData {
    
    foodtruckInfoCtrl: ModalFoodtruckInfoCtrl;
    menuListCtrl: ModalMenuListCtrl;
    optionListCtrl: ModalOptionListCtrl;
    searchDataCtrl: SearchDataCtrl

    constructor(dataCtrl : CommunicationService) {
        this.foodtruckInfoCtrl = new ModalFoodtruckInfoCtrl(dataCtrl);
        this.menuListCtrl = new ModalMenuListCtrl(dataCtrl);
        this.optionListCtrl = new ModalOptionListCtrl(dataCtrl);
        this.searchDataCtrl = new SearchDataCtrl(dataCtrl);
    }
}