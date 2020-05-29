import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SharedDataService } from './services/shared-data/shared-data.service';
import { PageDataStorageService } from './services/app-data/page-data-storage/page-data-storage.service';

// const messaging = firebase.messaging();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private sharedData: SharedDataService,
    
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      console.log("app start");
      this.sharedData.init().then(()=>{
        this.appReady();
      }).catch(e =>{
        console.log(e);
        //id 받아오지 못함
      });
      
    });

  }

  appReady(){
    // messaging.usePublicVapidKey(
    //   "BNDZbeylxYXD9hXIeSuxVq4Ndbb9okiCbXm1IqXR3rMjHfNjfN7nrJ32m_YxAtIhOoYOuzz54bAd5Dv9vETvj_4");

    //   Notification.requestPermission().then((permission) =>{
    //     if(permission === 'granted'){
    //       console.log("Notification permission granted");

    //     }
    //     else{
    //       console.log("notification permission unabled");
    //     }
    //   });

    //         // Callback fired if Instance ID token is updated.
    //   messaging.onTokenRefresh(() => {
    //     messaging.getToken().then((refreshedToken) => {
    //       console.log('Token refreshed.');
    //       // Indicate that the new Instance ID token has not yet been sent to the
    //       // app server.
    //       setTokenSentToServer(false);
    //       // Send Instance ID token to app server.
    //       sendTokenToServer(refreshedToken);
    //       // ...
    //     }).catch((err) => {
    //       console.log('Unable to retrieve refreshed token ', err);
    //       showToken('Unable to retrieve refreshed token ', err);
    //     });
    //   });
    this.splashScreen.hide();
  }

  appNotReady(){

  }

}
