import { WaitingData } from './waiting';
import { LocationData } from './location';
import { FoodtruckLocalData } from './foodtruck-local';

export interface FoodtruckData {
    id: number,
    name: string,

    information:string,     //정보
    notice: string,    //공지
    imgSrc: string;    //이미지

    locate? : LocationData,   //위치
    localData?: FoodtruckLocalData,
    
    wating?: WaitingData,    //웨이팅
    rating?: number,      //평점
}