import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodtruckListPageRoutingModule } from './foodtruck-list-routing.module';

import { FoodtruckListPage } from './foodtruck-list.page';

import { CardviewComponent } from './foodtruck-cardview/cardview.component';
import { TagWaitingComponentModule } from 'src/app/component/tag-waiting/tag-waiting.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodtruckListPageRoutingModule,
    TagWaitingComponentModule,
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
