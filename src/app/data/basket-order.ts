import { identifierModuleUrl } from '@angular/compiler';
import { ControlledData } from '../services/data-ctrl/data.interface';
import { BasketOrderedMenu } from './basket-ordered-menu';


export class BasketOrder implements ControlledData{
    orderedMenu: BasketOrderedMenu[] = [];

    constructor(private foodtruckId: number){
    }

    get id() {
        return this.foodtruckId;
    }
}