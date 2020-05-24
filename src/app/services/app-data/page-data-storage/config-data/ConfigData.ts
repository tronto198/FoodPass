import { DataControllerService } from '../../data-controller/data-controller.service';
import { UserAccountCtrl } from './userAccount.ctrl';

export class ConfigData {

    userAccountCtrl : UserAccountCtrl;

    constructor(dataCtrl : DataControllerService){
        this.userAccountCtrl = new UserAccountCtrl(dataCtrl);
    }
}