import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodtruckListPageRoutingModule } from './foodtruck-list-routing.module';

import { FoodtruckListPage } from './foodtruck-list.page';
import { OrderWaitingComponentModule } from 'src/app/component/order-waiting/order-waiting.module';
import { CardviewComponent } from './foodtruck-cardview/cardview.component';

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
