import { TabOrderWaitingListCtrl } from './waitingList.ctrl';
import { TabOrderHistoryListCtrl } from './orderHistoryList.ctrl';
import { TabOrderSlideCtrl } from './slide.ctrl';
import { HttpClient } from '@angular/common/http';
import { CommunicationService } from 'src/app/services/communication/communication.service';


export class TabOrderData {

    waitingCtrl : TabOrderWaitingListCtrl
    historyCtrl : TabOrderHistoryListCtrl;
    // slideCtrl : TabOrderSlideCtrl;

    constructor(dataCtrl : CommunicationService) {
        this.waitingCtrl = new TabOrderWaitingListCtrl(dataCtrl);
        this.historyCtrl = new TabOrderHistoryListCtrl(dataCtrl);
        // this.slideCtrl = new TabOrderSlideCtrl();
    }

}