import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { httpResponse } from '../app-data/data-controller/http-communication.interface';
import { resNewAccount } from '../app-data/data-controller/reqType/account/newAccount.req';
import { environment } from 'src/environments/environment';
import { reqUrl } from '../app-data/data-controller/reqType/req-url.enum';


const StorageID = "id";

export class SharedAccount {

    myAccountId: number;
    
    constructor(    
        private httpClient : HttpClient,
        private localStorage: Storage,
        )
    {

    }

    init() : Promise<void> {
        return this.getId();
    }
    
    private getId() : Promise<void> {

        return new Promise((resolve, reject) => {
            this.localStorage.get(StorageID).then(val =>{
                if(val != undefined){
                    console.log('local id');
                    this.myAccountId = val;
                    resolve();
                }
                else{
                    console.log('local id not found');
                    this.createId(resolve, reject);
                }
                    
            }); 
        });
            
    }

    private createId(resolve, reject) : void {
        let url = environment.host.concat(reqUrl.newAccount);
        this.httpClient.post(url, null).subscribe(data  =>{
            let d = data as httpResponse;
            if(d.result){
                this.myAccountId = (d.data as resNewAccount).accountId;
                console.log('id created');
                resolve();
            }
            else{
                //error
                console.log('error at create id');
                reject();
            }
        });
    }

}