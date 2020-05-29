import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SharedGeolocation } from './geolocation.shared';
import { SharedAccount } from './account.shared';



@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  geolocation : SharedGeolocation;
  account : SharedAccount;


  foodtruckOwner: boolean;

  constructor(
    httpClient : HttpClient,
    localStorage: Storage,
    geo: Geolocation,
    ) {
      this.geolocation = new SharedGeolocation(geo);
      this.account = new SharedAccount(httpClient, localStorage);
    }



  init() : Promise<void> {
    //id 받기
    //위치 받기

    return new Promise((resolve, reject) =>{

      let ready: boolean = false;
      this.account.init().then( () =>{
        if(ready){
          resolve();
        }
        else{
          ready = true;
        }

      }).catch( e =>{
        reject();
      });

      this.geolocation.init().then(() =>{
        if(ready){
          resolve();
        }
        else{
          ready = true;
        }
      }).catch( e=>{
        if(ready){
          resolve();
        }
        else{
          ready = true;
        }
      })

    })
    

  }


}
