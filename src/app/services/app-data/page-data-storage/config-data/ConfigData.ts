import { DataControllerService } from '../../data-controller/data-controller.service';
import { UserAccountCtrl } from './userAccount.ctrl';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';

export class ConfigData {

    // userAccountCtrl : UserAccountCtrl;

    constructor(
        userConfig : SharedDataService,
        dataCtrl : DataControllerService,
        ){
        // this.userAccountCtrl = new UserAccountCtrl(userConfig, dataCtrl);
    }
}