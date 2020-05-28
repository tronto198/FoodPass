import { DataControllerService } from '../../data-controller/data-controller.service';
import { UserAccountCtrl } from './userAccount.ctrl';
import { UserConfigService } from 'src/app/services/user-config/user-config.service';

export class ConfigData {

    userAccountCtrl : UserAccountCtrl;

    constructor(
        userConfig : UserConfigService,
        dataCtrl : DataControllerService,
        ){
        this.userAccountCtrl = new UserAccountCtrl(userConfig, dataCtrl);
    }
}