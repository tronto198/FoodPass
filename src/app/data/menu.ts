import { DefaultValue } from 'src/environments/defaultValue';
import { ControlledData } from '../services/data-ctrl/data.interface';

export interface MenuData extends ControlledData{
    id:number;
    menuName:string;
    menuInformation?:string;
    price:number;

    imgsrc?:string;
}