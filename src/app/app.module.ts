import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { IonicGestureConfig } from 'src/IonicGestureConfig';
import { SharedComponentModule } from './component/shared-component.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging'
import { RootServicesModule } from './services/root-services.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      BrowserModule, 
      IonicModule.forRoot(), 
      AppRoutingModule,

      IonicStorageModule.forRoot(), //로컬 저장소
      HttpClientModule,       //http 연결용

      SharedComponentModule,  //공통 컴포넌트
      RootServicesModule,          //앱 데이터

      AngularFireModule.initializeApp(environment.firebase),  //firebase
      AngularFireMessagingModule,
      // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), //아마 @angular/pwa 관련
      ServiceWorkerModule.register('combined-sw.js', { enabled: environment.production }),
    ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
  
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // { provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
