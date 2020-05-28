import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { httpResponse } from '../app-data/data-controller/http-communication.interface';
import { resNewAccount } from '../app-data/data-controller/reqType/newAccount.req';


const StorageID = "id";
const createIdUrl = "http://localhost:80/account/create"

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
        this.httpClient.post(createIdUrl, null).subscribe(data  =>{
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