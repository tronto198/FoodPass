import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavController } from '@ionic/angular';

import { TabHomePageRoutingModule } from './tab-home-routing.module';

import { ToastController, ModalController } from '@ionic/angular';

import { TabHomePage } from './tab-home.page';
import { BasketPage } from '../../modal-pages/basket/basket.page';
import { from } from 'rxjs';
import { TabHomeControllerService } from 'src/app/services/tab-home-controller/tab-home-controller.service';
import { FoodtruckListPage } from './foodtruck-list/foodtruck-list.page';
import { FoodtruckInfoPage } from './foodtruck-info/foodtruck-info.page';
<<<<<<< HEAD
import { MenuListComponent } from 'src/component/menu-list/menu-list.component';
 
=======
import { CardviewComponent } from 'src/app/component/cardview/cardview.component';
import { MapPage } from 'src/app/modal-pages/map/map.page';

>>>>>>> 37492a47073d9181c91bd8e43518cb76fad10575
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
    MapPage,
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
