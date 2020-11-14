import { OptionData } from 'src/app/data/option';


export interface reqOptionData {
    foodtruckId : number;
    menuId : number;
    id:number;
}

export interface resOptionData {
    optionData : OptionData;
}