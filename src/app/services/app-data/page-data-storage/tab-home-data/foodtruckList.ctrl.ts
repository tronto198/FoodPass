import { FoodtruckData } from 'src/app/data/foodtruck';
import { LocationData } from 'src/app/data/location';
import { DataControllerService } from '../../data-controller/data-controller.service';
import { reqFoodtruckList, resFoodtruckList } from '../../data-controller/reqType/listData/foodtruckList.req';
import { reqUrl } from '../../data-controller/reqType/req-url.enum';
import { SharedGeolocation } from 'src/app/services/shared-data/geolocation.shared';

declare var kakao;
const signArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export class TabHomeFoodtruckListCtrl {
    foodtruckList: FoodtruckData[];
    private updateFlag = false;
    presentFlag = false;

    constructor(private dataCtrl : DataControllerService){

    }

    getFoodtruckList(location? : LocationData) : void{

        let req : reqFoodtruckList = {
            location: location
        };

        let FoodtruckDummyData : FoodtruckData[] = [];
        FoodtruckDummyData.push({id: 10, name: "닭발집 10", introduction:"치즈닭발, 무뼈닭발있습니다.", location: {lat: 36.34643152, lng: 127.30269199},
        rating:3.5, waiting:{person: 5, time: 15}, notice:"화요일은 충남대 갑니다" , imgSrc:"../assets/icon/foodtruck.png"});
        FoodtruckDummyData.push({id: 11, name: "와플집 11", introduction:" 초코와플, 바나나와플, 딸기와플,  빙수", location: {lat: 36.34591574, lng: 127.30352547},
        rating: 4.5, waiting:{person: 12, time: 30}, notice:"1명당 대기시간 약 3분 소요됩니다.", imgSrc:"../assets/icon/foodtruck2.png"});
        FoodtruckDummyData.push({id: 12, name: "떡볶이집 12", introduction:"떡복이 맵기: 순함, 중간, 매움", location: {lat: 36.34506285, lng: 127.30225225},
        rating:4, waiting:{person: 3, time: 5}, notice:"이번주 토요일 엑스포 행사장 갑니다.", imgSrc:"../assets/icon/foodtruck3.png"});
        
        this.foodtruckList = FoodtruckDummyData;
        let res : resFoodtruckList = {
            foodtruckList : FoodtruckDummyData
        };

        // this.dataCtrl.request<resFoodtruckList>(reqUrl.foodtruckList, req, true, "푸드트럭 리스트를 가져오는 중입니다...")
        // .then(data =>{
        //     this.foodtruckList = data.foodtruckList;
        //     console.log('get foodtrucklist');

        //     this.allocateSign();
        //     this.calculateFoodtruckDistance();
        // })

        this.dataCtrl.testRequest<resFoodtruckList>(reqUrl.foodtruckList, req, true, res, 500)
        .then(data =>{
            this.foodtruckList = data.foodtruckList;
            console.log('get foodtrucklist');

            this.allocateSign();
            this.calculateFoodtruckDistance();
        })
    }

    get geolocation() : SharedGeolocation{
        return this.dataCtrl.sharedData.geolocation;
    }

    private allocateSign() : void {
        console.log('allocate sign');
        
        let index = 0;
        if(this.foodtruckList == null){
            return;
        }

        this.foodtruckList.forEach((val) =>{
            if(val.location != null){
                val.localData = {
                    sign: signArr.charAt(index++)
                }
            }
        });
    }

    calculateFoodtruckDistance() : void {
        if(this.geolocation.isMyLocation){
            console.log('update foodtruck distance');

            if(this.foodtruckList == null){
                return;
            }

            this.foodtruckList.forEach((val) => {
                if(val.location != null){
                    var line = new kakao.maps.Polyline({
                        path : [new kakao.maps.LatLng(this.geolocation.currentLocation.lat, this.geolocation.currentLocation.lng),
                        new kakao.maps.LatLng(val.location.lat, val.location.lng)],
                    })
                    let dis = Math.round(line.getLength());
                    
                    val.localData.distance = dis
                    
                }
            });

            console.log('updated');
        }
    }
}