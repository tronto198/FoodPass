import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavController } from '@ionic/angular';

import { TabHomePageRoutingModule } from './tab-home-routing.module';

import { ToastController, ModalController } from '@ionic/angular';

import { TabHomePage } from './tab-home.page';
import { BasketPageModule } from 'src/app/modal-pages/basket/basket.module';
import { MapPagePageModule } from 'src/app/modal-pages/map/map.module';
import { FtViewComponentModule } from 'src/app/component/ft-view/ft-view.module';
import { SearchPageModule } from 'src/app/modal-pages/search/search.module';


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
  ],
  providers: [
    ToastController,
    ModalController,
    NavController,
  ]
})
export class TabHomePageModule {}
//todo: splashScreen
