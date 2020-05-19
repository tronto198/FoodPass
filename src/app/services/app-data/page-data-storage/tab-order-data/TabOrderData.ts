import { TabOrderWaitingList } from './waitingList.data';
import { TabOrderHistoryList } from './orderHistoryList.data';
import { TabOrderSlideCtrl } from './slideCtrl.data';


export class TabOrderData {

    waitingCtrl : TabOrderWaitingList
    historyCtrl : TabOrderHistoryList;
    slideCtrl : TabOrderSlideCtrl;

    constructor() {
        this.waitingCtrl = new TabOrderWaitingList();
        this.historyCtrl = new TabOrderHistoryList();
        this.slideCtrl = new TabOrderSlideCtrl();
    }

}