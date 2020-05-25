import { OrderType } from './order-type.enum';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { OrderData } from 'src/app/data/order';

export class orderListComponent{
    orderType : OrderType;
    
    constructor(private pageData : PageDataStorageService){

    }

    get orderList() : OrderData[]{
        if(this.isBasket()){
            return this.pageData.tabHome.basketCtrl.items;
        }
        else if(this.isWaiting()){
            return this.pageData.tabOrder.waitingCtrl.items;
        }
        else if(this.isHistory()){
            return this.pageData.tabOrder.historyCtrl.items;
        }
    }

    isBasket() : boolean{
        return this.orderType == OrderType.basket;
    }

    isWaiting() : boolean{
        return this.orderType == OrderType.waiting;
    }
    
    isHistory() : boolean{
        return this.orderType == OrderType.history;
    }
    
    orderPrice(orderIndex : number){
        let price : number = 0;
        this.orderList[orderIndex].orderedMenu.forEach((val, i, arr)=>{
        price += val.amount * (val.menuinfo.price + val.optioninfo.extraPrice);
        })

        return price;
    }

    removeOrder(orderIndex : number){
        this.orderList.splice(orderIndex, 1);
    }

    removeMenu(orderIndex : number, menuIndex : number){
        //todo splice하고 뒤의 index들이 당겨지는 현상 수정해야함
        this.orderList[orderIndex].orderedMenu.splice(menuIndex, 1);
        if(this.orderList[orderIndex].orderedMenu.length == 0){
        this.removeOrder(orderIndex);
        }
    }
}

export interface OrderList{
    items : OrderData[];
}