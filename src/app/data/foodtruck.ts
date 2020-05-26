import { WaitingData } from './waiting';
import { LocationData } from './location';

export interface FoodtruckData {
    id: number,
    name: string,

    locate? : LocationData,   //위치
    distance?:number,   //거리

    information?:string,     //정보
    notice?: string,    //공지
    imgSrc?: string;    //이미지
    
    wating?: WaitingData,    //웨이팅
    rating?: number,      //평점
}