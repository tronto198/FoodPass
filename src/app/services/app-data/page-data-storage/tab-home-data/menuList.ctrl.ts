import { MenuData } from 'src/app/data/menu';
import { reqMenuList, resMenuList } from '../../data-controller/reqType/listData/menuList.req';
import { DataControllerService } from '../../data-controller/data-controller.service';
import { reqUrl } from '../../data-controller/reqType/req-url.enum';

export class TabHomeMenuListCtrl {
    menuList : MenuData[];

    constructor(private dataCtrl : DataControllerService){

    }

    getMenuList(foodtruckId : number) : void{
        let MenuDummyData = [];
        MenuDummyData.push({menuID:10, menuName:"도넛1", menuInform:"치즈맛 도넛", price:5000, src:"../assets/icon/donut.png"});
        MenuDummyData.push({menuID:12, menuName:"도넛2", menuInform:"초코맛 도넛", price:6000, src:"../assets/icon/donut.png"});
        MenuDummyData.push({menuID:14, menuName:"와플1", menuInform:"바나나 와플", price:7000, src:"../assets/icon/waffle.png"});
        MenuDummyData.push({menuID:16, menuName:"와플2", menuInform:"딸기와플", price:8000, src:"../assets/icon/waffle.png"});

        // this.menuList = MenuDummyData;

        let req : reqMenuList = {
            foodtruckId: foodtruckId
        };
        let res : resMenuList = {
            menuList: MenuDummyData
        };

        this.dataCtrl.request<resMenuList>(reqUrl.menuList, req, true, "메뉴 정보를 가져오는 중입니다...")
        .then(data =>{
            this.menuList = data.menuList;
            console.log('get menuList');
        });
    }
}