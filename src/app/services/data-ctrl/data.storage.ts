import { ControlledData } from './data.interface';
import { ADataProvider } from '../data-provider/data.provider.abstract';

//데이터 저장소
export class DataStorage<T extends ControlledData> implements ControlledData {
    private dataMap = new Map<string, T>();
    //key로 number는 인식 안됨

    //todo child
    constructor(public data : ControlledData = undefined){
        
    }

    get iter(){
        return this.dataMap.values()
    }

    get id(){
        return this.data.id;
    }

    has(key : number) : boolean {
        return this.dataMap.has(key.toString());
    }

    getData(key: number) : T | null{
     
        if(this.dataMap.has(key.toString())){
            return this.dataMap.get(key.toString());
        }
        else{
            return null
        }
            
    }

    setData(value: T) : boolean{
      
        if(value.id == undefined)
            throw Error("set data error:: undefined");
        if(!this.dataMap.has(value.id.toString())){
            this.dataMap.set(value.id.toString(), value);
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