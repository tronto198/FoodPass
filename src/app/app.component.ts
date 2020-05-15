import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { OrderHistoryService } from './services/order-history/order-history.service';
import { UserConfigService } from './services/user-config/user-config.service';

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
    private historyCtrl : OrderHistoryService,
    private config : UserConfigService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      console.log("app start");

      this.loadConfig();
    });

    // this.router.navigateByUrl("/tabs/order");
  }

  loadConfig(){
    this.historyCtrl.load();
    this.config.init();

    console.log("loading config");
  }
}
