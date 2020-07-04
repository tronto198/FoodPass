import { ModalFoodtruckInfoCtrl } from './FoodtruckInfo.ctrl';
import { ModalMenuListCtrl } from './menuList.ctrl';
import { ModalOptionListCtrl } from './optionList.ctrl';
import { DataControllerService } from '../../data-controller/data-controller.service';

export class ModalData {
    
    foodtruckInfoCtrl: ModalFoodtruckInfoCtrl;
    menuListCtrl: ModalMenuListCtrl;
    optionListCtrl: ModalOptionListCtrl;

    constructor(dataCtrl : DataControllerService) {
        this.foodtruckInfoCtrl = new ModalFoodtruckInfoCtrl(dataCtrl);
        this.menuListCtrl = new ModalMenuListCtrl(dataCtrl);
        this.optionListCtrl = new ModalOptionListCtrl(dataCtrl);

    }
}