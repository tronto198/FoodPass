import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavController } from '@ionic/angular';

import { TabHomePageRoutingModule } from './tab-home-routing.module';

import { ToastController, ModalController } from '@ionic/angular';

import { TabHomePage } from './tab-home.page';
import { MapComponent } from '../../../component/map/map.component';
import { BasketPage } from '../../modal-pages/basket/basket.page';
import { from } from 'rxjs';
import { TabHomeControllerService } from 'src/app/services/tab-home-controller/tab-home-controller.service';
import { FoodtruckListPage } from './foodtruck-list/foodtruck-list.page';
import { CardviewComponent } from '../../../component/cardview/cardview.component';
import { FoodtruckInfoPage } from './foodtruck-info/foodtruck-info.page';
import { MenuListComponent } from 'src/component/menu-list/menu-list.component';
 
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
    BasketPage,
    FoodtruckListPage,
    FoodtruckInfoPage,
    MenuListComponent
  ],
  providers: [
    TabHomeControllerService,
    ToastController,
    ModalController,
    NavController
  ]
})
export class TabHomePageModule {}
//todo: splashScreen
