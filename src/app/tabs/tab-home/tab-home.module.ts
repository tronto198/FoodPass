import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavController } from '@ionic/angular';

import { TabHomePageRoutingModule } from './tab-home-routing.module';

import { ToastController, ModalController } from '@ionic/angular';

import { TabHomePage } from './tab-home.page';
import { MapComponent } from '../../../component/map/map.component';
import { CardviewComponent } from '../../../component/cardview/cardview.component';
import { BasketPage } from './basket/basket.page';
import { from } from 'rxjs';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabHomePageRoutingModule
  ],
  declarations: [
    TabHomePage,
    CardviewComponent,
    MapComponent,
    BasketPage
  ],
  providers: [
    ToastController,
    ModalController,
    NavController
  ]
})
export class TabHomePageModule {}
//todo: splashScreen
