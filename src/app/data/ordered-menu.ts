import { MenuData } from './menu';
import { OptionData } from './option';
import { CheckValue } from './checkbox-value';

export interface OrderedMenuData extends CheckValue {
    menuinfo: MenuData,
    optioninfo: OptionData,
    amount: number
}