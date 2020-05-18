import { TabHomeBasket } from './basket.data';
import { TabHomeFoodtruckList } from './foodtruckList.data';
import { TabHomeRoute as TabHomeRouteData } from './route.data';
import { TabHomeMenuList } from './menuList.data';
import { TabHomeOptionList } from './optionList.data';

export class TabHomeData {
    basketCtrl : TabHomeBasket;
    routeDataCtrl: TabHomeRouteData;
    foodtruckListCtrl: TabHomeFoodtruckList;
    menuListCtrl: TabHomeMenuList;
    optionListCtrl: TabHomeOptionList;
    
    constructor() {
      this.basketCtrl = new TabHomeBasket();
      this.foodtruckListCtrl = new TabHomeFoodtruckList();
      this.routeDataCtrl = new TabHomeRouteData();
      this.menuListCtrl = new TabHomeMenuList();
      this.optionListCtrl = new TabHomeOptionList();
    }

}