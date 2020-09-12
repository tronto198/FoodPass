import { CommunicationService } from '../communication/communication.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

//외부로부터 데이터를 공급해주는 클래스들 - data provider
@Injectable()
export abstract class ADataProvider{
    constructor(protected comm: CommunicationService){
    }

    abstract getItem(...values: number[])

    protected getDataWithPromise<T>(action: () => T) : Promise<T>{
        return new Promise((resolve, reject)=>{
            try{
                resolve(action.bind(this)());
            }
            catch(e){
                if(!environment.production)
                    console.log(e);
                reject(e);
            }
        })
    }
}