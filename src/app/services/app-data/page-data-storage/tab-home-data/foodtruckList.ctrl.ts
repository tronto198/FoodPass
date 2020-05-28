import { FoodtruckData } from 'src/app/data/foodtruck';
import { LocationData } from 'src/app/data/location';
import { DataControllerService } from '../../data-controller/data-controller.service';
import { reqFoodtruckList, resFoodtruckList } from '../../data-controller/reqType/foodtruckList.req';
import { reqUrl } from '../../data-controller/reqType/req-url.enum';


export class TabHomeFoodtruckListCtrl {
    foodtruckList: FoodtruckData[];

    constructor(private dataCtrl : DataControllerService){

    }

    getFoodtruckList(location? : LocationData) : void{

        let req : reqFoodtruckList = {
            location: location
        };

        let FoodtruckDummyData : FoodtruckData[] = [];
        FoodtruckDummyData.push({id: 10, name: "닭발집 10", information:"치즈닭발, 무뼈닭발있습니다.", 
        rating:3.5, wating:{person: 5, time: 15}, notice:"화요일은 충남대 갑니다" , imgSrc:"../assets/icon/foodtruck.png"});
        FoodtruckDummyData.push({id: 11, name: "와플집 11", information:" 초코와플, 바나나와플, 딸기와플,  빙수",
        rating: 4.5, wating:{person: 12, time: 30}, notice:"1명당 대기시간 약 3분 소요됩니다.", imgSrc:"../assets/icon/foodtruck2.png"});
        FoodtruckDummyData.push({id: 12, name: "떡볶이집 12", information:"떡복이 맵기: 순함, 중간, 매움",
        rating:4, wating:{person: 3, time: 5}, notice:"이번주 토요일 엑스포 행사장 갑니다.", imgSrc:"../assets/icon/foodtruck3.png"});
        // FoodtruckDummyData.push({id: 13, name: "13", information:"짝수 맞추기 위한 카드뷰",
        // rating:0, wating:{person: 0, time: 3}, notice:"카드가 홀수일 경우 공간만 차지하게 해야 함"});
        
        // this.foodtruckList = FoodtruckDummyData;
        let res : resFoodtruckList = {
            foodtruckList : FoodtruckDummyData
        };

        this.dataCtrl.testRequest<resFoodtruckList>(reqUrl.foodtruckList, req, true, res, 150, false)
        .then(data =>{
            this.foodtruckList = data.foodtruckList;
            console.log('get foodtrucklist');
        });


    }
}