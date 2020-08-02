import { DefaultValue } from 'src/environments/defaultValue';
import { ControlledData } from '../services/data-ctrl/data.interface';

export class MenuData implements ControlledData{
    id:number;
    menuName:string;
    menuInformation?:string;
    price?:number;
    imgsrc?:string = DefaultValue.MenuImgSrc;
}