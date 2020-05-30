import { Component, OnInit } from '@angular/core';
import { firebase } from "@firebase/app";

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SharedDataService } from './services/shared-data/shared-data.service';
import { PageDataStorageService } from './services/app-data/page-data-storage/page-data-storage.service';
// import { firebaseConfig } from './app.config';
import { NotificationService } from './services/notification/notification.service';
import { environment } from 'src/environments/environment';

// import {} from '@angular/fire';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private sharedData: SharedDataService,
    private notification: NotificationService
    
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

  async appReady(){
    firebase.initializeApp(environment.firebase);
    
    await this.notification.init();
    this.notification.requestPermission().then((val) =>{
      console.log('granted');
    }).catch(e =>{
      console.log('not granted');
    })

    this.splashScreen.hide();
  }
  appNotReady(){

  }

  async ngOnInit(){

    
  }

}
