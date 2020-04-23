import { MenuData } from './menu';

export interface OptionData {
    id: number,
    menu: MenuData,
    name: string,
    extraPrice: number
}