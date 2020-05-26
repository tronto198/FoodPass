import { OptionData } from 'src/app/data/option';

export interface reqOptionList{
    foodtruckId : number;
    menuId : number;
}

export interface resOptionList {
    optionList : OptionData[];
}