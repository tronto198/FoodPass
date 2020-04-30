import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodtruckInfoPageRoutingModule } from './foodtruck-info-routing.module';

import { FoodtruckInfoPage } from './foodtruck-info.page';
import { MenuInfoPageModule } from '../menu-info/menu-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodtruckInfoPageRoutingModule,
    MenuInfoPageModule
  ],
  exports: [
    FoodtruckInfoPage
  ],
  declarations: [FoodtruckInfoPage]
})
export class FoodtruckInfoPageModule {}
