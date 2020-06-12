import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { DataControllerService } from '../../data-controller/data-controller.service';
import { reqFoodtruckData, resFoodtruckData } from '../../data-controller/reqType/infoData/foodtruckData.req';
import { reqUrl } from '../../data-controller/reqType/req-url.enum';
import { reqMenuData, resMenuData } from '../../data-controller/reqType/infoData/menuData.req';

export class TabHomeRouteDataCtrl {
    currentFoodtruck: FoodtruckData;
    currentMenu: MenuData;

    constructor(private dataCtrl: DataControllerService){

    }

    getFoodtruckData(id : number) : void{//todo : promise로 고치기 => promise 후에 메뉴리스트를 가져오게
        // let data : FoodtruckData = {id: 10, name: "닭발집 10", locate:{name: "A", lat: 0, lng : 0}, distance:500,introduction:"치즈닭발, 무뼈닭발있습니다.", 
        // rating:3.5, wating:{person: 5, time: 10}, notice:"화요일은 충남대 갑니다" , imgSrc:"../assets/icon/foodtruck.png"};

        // let req : reqFoodtruckData = {
        //     foodtruckId: id
        // };

        // let res : resFoodtruckData = {
        //     foodtruckData: data
        // };

        // this.dataCtrl.request<resFoodtruckData>(reqUrl.foodtruckData, req, true)
        // .then(data =>{
        //     this.currentFoodtruck = data.foodtruckData;
        //     console.log('get foodtruckData');
        // })
    }
    getMenuData(foodtruckId: number, menuId: number) : void {
        let menudata = {menuID:10, menuName:"도넛1", menuInformation:"치즈맛 도넛", price:5000, imgsrc:"../assets/icon/donut.png"};

        let req : reqMenuData = {
            foodtruckId: foodtruckId,
            menuId: menuId
        };

        let res : resMenuData = {
            menuData: menudata
        };

        this.dataCtrl.request<resMenuData>(reqUrl.menuData, req, true)
        .then(data =>{
            this.currentMenu = data.menuData;
            console.log('get menuData');
        })
    }
}