import { DefaultValue } from 'src/environments/defaultValue';

export class MenuData{
    menuID:number;
    menuName:string;
    menuInformation?:string;
    price?:number;
    imgsrc?:string = DefaultValue.MenuImgSrc;
}