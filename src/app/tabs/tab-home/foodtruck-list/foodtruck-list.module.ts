import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodtruckListPageRoutingModule } from './foodtruck-list-routing.module';

import { FoodtruckListPage } from './foodtruck-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodtruckListPageRoutingModule
  ],
  declarations: [
    FoodtruckListPage
  ]
})
export class FoodtruckListPageModule {}
