import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SharedGeolocation } from './geolocation.shared';
import { SharedAccount } from './account.shared';
import { TabOrderPage } from 'src/app/tabs/tab-order/tab-order.page';
import { ConfirmDataCtrl } from '../data-ctrl/confirm.data.ctrl';

@Injectable()
export class SharedDataService {

  geolocation : SharedGeolocation;
  account : SharedAccount;

  foodtruckOwner: boolean;
  isFoodtruckOpen : boolean;

  constructor(
    httpClient : HttpClient,
    localStorage: Storage,
    geo: Geolocation,
    //tabOrderPage:TabOrderPage,
   
    ) {
      this.geolocation = new SharedGeolocation(geo);
      this.account = new SharedAccount(httpClient, localStorage);
    }

    open(){
      this.isFoodtruckOpen= true;
      console.log(`푸드트럭 오픈됨`, this.isFoodtruckOpen)
     
    }

    close(){
      this.isFoodtruckOpen= false;
      console.log(`푸드트럭 닫음`, this.isFoodtruckOpen)
    }



  // init() : Promise<void> {
  //   //id 받기
  //   //위치 받기

  //   return new Promise((resolve, reject) =>{

  //     let ready: boolean = false;
  //     this.account.init().then( () =>{
  //       if(ready){
  //         resolve();
  //       }
  //       else{
  //         ready = true;
  //       }

  //     }).catch( e =>{
  //       reject();
  //     });

  //     this.geolocation.init().then(() =>{
  //       if(ready){
  //         resolve();
  //       }
  //       else{
  //         ready = true;
  //       }
  //     }).catch( e=>{
  //       if(ready){
  //         resolve();
  //       }
  //       else{
  //         ready = true;
  //       }
  //     })

  //   })
    

  // }


}
