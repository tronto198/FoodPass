import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavController } from '@ionic/angular';

import { TabHomePageRoutingModule } from './tab-home-routing.module';

import { ToastController, ModalController } from '@ionic/angular';

import { TabHomePage } from './tab-home.page';
import { FtViewComponentModule } from 'src/app/component/ft-view/ft-view.module';
import { SearchPageModule } from 'src/app/modal-pages/search/search.module';
import { MapComponent } from './map/map.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabHomePageRoutingModule,
    FtViewComponentModule,
    SearchPageModule,
  ],
  declarations: [
    TabHomePage,
    MapComponent,
  ],
  providers: [
    ToastController,
    ModalController,
    NavController,
  ]
})
export class TabHomePageModule {}
//todo: splashScreen
