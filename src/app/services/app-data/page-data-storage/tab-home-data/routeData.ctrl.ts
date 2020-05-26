import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { DataControllerService } from '../../data-controller/data-controller.service';

const reqType = "routeData";  //인수가 하나인지 둘인지로 구분

export class TabHomeRouteDataCtrl {
    currentFoodtruck: FoodtruckData;
    currentMenu: MenuData;

    constructor(private dataCtrl: DataControllerService){

    }

    getFoodtruckData(id : number){
        this.currentFoodtruck = {id: 10, name: "닭발집 10", locate:{name: "A", lat: 0, lng : 0}, distance:500,information:"치즈닭발, 무뼈닭발있습니다.", 
        rating:3.5, wating:{person: 5, time: 10}, notice:"화요일은 충남대 갑니다" , imgSrc:"../assets/icon/foodtruck.png"};
    }
    getMenuData(foodtruckId: number, menuId: number){
        this.currentMenu = {menuID:10, menuName:"도넛1", menuInformation:"치즈맛 도넛", price:5000, imgsrc:"../assets/icon/donut.png"};
    }
}