import { CommunicationService } from '../communication/communication.service';
import { environment } from 'src/environments/environment';

//외부로부터 데이터를 공급해주는 클래스들 - data provider
export abstract class ADataProvider{
    constructor(protected comm: CommunicationService){
    }

    getDataWithPromise<T>(action: () => T) : Promise<T>{
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