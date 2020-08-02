import { ControlledData } from './data.interface';
import { exception } from 'console';

//데이터 저장소
export class DataStorage<T extends ControlledData> implements ControlledData {
    private dataMap = new Map<number, T>();

    constructor(public data : ControlledData = undefined){
        
    }

    get id(){
        return this.data.id;
    }

    getData(key: number){
        return this.dataMap.get(key);
    }

    setData(value: T) : boolean{
        if(value.id == undefined)
            throw Error("undefined");
        if(!this.dataMap.has(value.id)){
            this.dataMap.set(value.id, value);
            return true;
        }
        return false;
    }

    updateDataList(...values : T[]): boolean{
        let updated = false;
        values.forEach((val)=>{
            this.setData(val);
        });
        
        return false;
    }

    toArray() : T[]{
        return Array.from(this.dataMap.values());
    }
}