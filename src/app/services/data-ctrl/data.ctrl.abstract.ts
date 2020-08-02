import { DataStorage } from './data.storage';
import { ControlledData } from './data.interface';

export abstract class ADataCtrl<T extends ControlledData> {
    dataStorage;
    dd(){
        this.dataStorage
    }

}