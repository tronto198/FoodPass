import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavController } from '@ionic/angular';

import { TabHomePageRoutingModule } from './tab-home-routing.module';

import { ToastController, ModalController } from '@ionic/angular';

import { TabHomePage } from './tab-home.page';
import { MapPage } from 'src/app/modal-pages/map/map.page';
import { BasketPageModule } from 'src/app/modal-pages/basket/basket.module';
import { FoodtruckListPageModule } from './foodtruck-list/foodtruck-list.module';
import { FoodtruckInfoPageModule } from './foodtruck-info/foodtruck-info.module';
import { MapPagePageModule } from 'src/app/modal-pages/map/map.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //순서 바꾸면 장바구니만 나옴 ??
    TabHomePageRoutingModule,
    FoodtruckListPageModule,
    FoodtruckInfoPageModule,
    BasketPageModule,
    MapPagePageModule,
  ],
  declarations: [
    TabHomePage,
    // MapPage,
  ],
  providers: [
    // TabHomeControllerService,
    ToastController,
    ModalController,
    NavController,
    // BasketControllerService
  ]
})
export class TabHomePageModule {}
//todo: splashScreen
