import { TabOrderWaitingList } from './waitingList.data';
import { TabOrderHistoryList } from './orderHistoryList.data';


export class TabOrderData {

    waitingCtrl : TabOrderWaitingList
    historyCtrl : TabOrderHistoryList;

    constructor() {
        this.waitingCtrl = new TabOrderWaitingList();
        this.historyCtrl = new TabOrderHistoryList();
    }

}