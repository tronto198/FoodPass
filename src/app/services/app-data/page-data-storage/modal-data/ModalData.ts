import { ModalFoodtruckInfoCtrl } from './FoodtruckInfo.ctrl';
import { ModalMenuListCtrl } from './menuList.ctrl';
import { ModalOptionListCtrl } from './optionList.ctrl';
import { DataControllerService } from '../../data-controller/data-controller.service';
import { SearchDataCtrl } from './search.ctrl';

export class ModalData {
    
    foodtruckInfoCtrl: ModalFoodtruckInfoCtrl;
    menuListCtrl: ModalMenuListCtrl;
    optionListCtrl: ModalOptionListCtrl;
    searchDataCtrl: SearchDataCtrl

    constructor(dataCtrl : DataControllerService) {
        this.foodtruckInfoCtrl = new ModalFoodtruckInfoCtrl(dataCtrl);
        this.menuListCtrl = new ModalMenuListCtrl(dataCtrl);
        this.optionListCtrl = new ModalOptionListCtrl(dataCtrl);
        this.searchDataCtrl = new SearchDataCtrl(dataCtrl);
    }
}