import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodtruckListPageRoutingModule } from './foodtruck-list-routing.module';

import { FoodtruckListPage } from './foodtruck-list.page';
import { CardviewComponent } from 'src/app/tabs/tab-home/foodtruck-list/foodtruck-cardview/cardview.component';
import { OrderWaitingComponentModule } from 'src/app/component/order-waiting/order-waiting.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodtruckListPageRoutingModule,
    OrderWaitingComponentModule,
  ],
  exports: [
    FoodtruckListPage
  ],
  declarations: [
    CardviewComponent,
    FoodtruckListPage,
  ]
})
export class FoodtruckListPageModule {}
