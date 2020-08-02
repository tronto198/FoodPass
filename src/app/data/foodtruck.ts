import { WaitingData } from './waiting';
import { LocationData } from './location';
import { FoodtruckLocalData } from './foodtruck-local';
import { DefaultValue } from 'src/environments/defaultValue';
import { ControlledData } from '../services/data-ctrl/data.interface';

export interface FoodtruckData extends ControlledData {
    id: number;
    name: string;

    introduction:string;     //정보
    notice: string;    //공지
    
    imgSrc?: string;    // = DefaultValue.foodtruckImgSrc;    //이미지

    location? : LocationData;   //위치
    localData?: FoodtruckLocalData;   //로컬데이터 : sign, distance
    
    waiting?: WaitingData;    //웨이팅
    rating?: number;      //평점

    // constructor(public id : number, public name: string, public introduction: string, 
    //     public notice: string, public imgSrc: string = DefaultValue.foodtruckImgSrc){ }
    
}