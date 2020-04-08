import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { ToastController, ModalController } from '@ionic/angular';
import { ServerConnecterService } from 'src/app/services/server-connecter/server-connecter.service';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  providers: [
    ToastController,
    ModalController,
    ServerConnecterService
  ]
})
export class HomePageModule {}
