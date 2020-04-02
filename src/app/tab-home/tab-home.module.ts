import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabHomePageRoutingModule } from './tab-home-routing.module';

import { ToastController } from '@ionic/angular';

import { TabHomePage } from './tab-home.page';
import { CardviewComponent } from '../../component/cardview/cardview.component';
import { ServerConnecterService } from '../../services/server-connecter/server-connecter.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabHomePageRoutingModule
  ],
  declarations: [TabHomePage, CardviewComponent],
  providers: [
    ToastController,
    ServerConnecterService
  ]
})
export class TabHomePageModule {}
