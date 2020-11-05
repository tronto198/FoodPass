import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { reqUrl } from '../communication/reqType/req-url.enum';
import { httpResponse } from '../communication/http.interface';
import { resNewAccount } from '../communication/reqType/account/newAccount.req';

const httpOption = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin': '*'
      //나중에 보안토큰 추가
    })
  };
const StorageID = "id";

export class SharedAccount {

    myAccountId: number;
    
    constructor(    
        private httpClient : HttpClient,
        private localStorage: Storage,
        )
    {
        httpOption.headers.set('Access-Control-Allow-Origin', '*');
    }

    init() : Promise<void> {
        return this.getId();
    }
    
    private getId() : Promise<void> {

        return new Promise((resolve, reject) => {
            this.localStorage.get(StorageID).then(val =>{
                if(val != undefined){
                    //this.myAccountId = val;
                    this.myAccountId=4026
                    console.log(`local id : ${this.myAccountId}`);
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
        this.httpClient.get(url, httpOption).subscribe(data  =>{
            let d = data as httpResponse;
            if(d.result){
                this.myAccountId = (d.data as resNewAccount).accountId;
               //this.myAccountId=4026
                console.log(`id created : ${this.myAccountId}` );
                this.localStorage.set(StorageID, this.myAccountId).then(val =>{
                    console.log("id saved");
                })
                resolve();
            }
            else{
                //error
                console.log('error in create id');
                reject();
            }
        });
    }

}