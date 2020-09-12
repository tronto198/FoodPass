import { MenuData } from './menu';
import { OptionData } from './option';

export interface OrderedMenuData {
    menuinfo: MenuData;
    optioninfo: OptionData;
    amount: number;
}