import { Injectable } from '@angular/core';
import { LocationData } from 'src/app/data/location';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { httpResponse } from '../app-data/data-controller/http-communication.interface';
import { resNewAccount } from '../app-data/data-controller/reqType/newAccount.req';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Subscription } from 'rxjs';


const StorageID = "id";
const createIdUrl = "http://localhost:80/account/create"
const geoOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  myAccountId: number;
  currentLocation: LocationData;
  isMyLocation: boolean = false;

  locationWatcher: Subscription = null;

  foodtruckOwner: boolean;

  constructor(
    private httpClient : HttpClient,
    private localStorage: Storage,
    private geo: Geolocation,
    ) {
      this.currentLocation = { lat: 36.3504563333333, lng:127.38481833333333 };
     }



  init() : Promise<void> {
    //id 받기
    //위치 받기

    return new Promise((resolve, reject) =>{

      let ready: boolean = false;
      this.getId().then( () =>{
        if(ready){
          resolve();
        }
        else{
          ready = true;
        }

      }).catch( e =>{
        reject();
      });

      this.getLocation().then(() =>{
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
    })
  }


  private getLocation() : Promise<void> {
    this.watchLocation((coords) =>{
      
    })
    return new Promise((resolve, reject) =>{

      this.geo.getCurrentPosition(geoOptions).then(val =>{
        const coords = val.coords;
        this.currentLocation.lat = coords.latitude;
        this.currentLocation.lng = coords.longitude;
        
        this.isMyLocation = true;

        console.log('get current location');
        resolve();
  
      }).catch(e =>{
        
        console.log('cannot get current location');
  
        resolve();
      });

    });

  }


  watchLocation(pipe : Function){
    this.locationWatcher = this.geo.watchPosition(geoOptions).subscribe(data =>{
      const coords = data.coords;
      this.currentLocation.lat = coords.latitude;
      this.currentLocation.lng = coords.longitude;

      pipe(coords);

      console.log('watching current location');
    });
  }
}
