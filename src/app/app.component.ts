import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserConfigService } from './services/user-config/user-config.service';
import { PageDataStorageService } from './services/app-data/page-data-storage/page-data-storage.service';

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
    private pageData : PageDataStorageService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      console.log("app start");
      this.pageData.config.userAccountCtrl.init().then(()=>{
        this.splashScreen.hide();
      }).catch(e =>{
        console.log(e);
      });
      
    });

  }

}
