import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodtruckPageRoutingModule } from './foodtruck-routing.module';

import { FoodtruckPage } from './foodtruck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodtruckPageRoutingModule
  ],
  declarations: [FoodtruckPage]
})
export class FoodtruckPageModule {}
