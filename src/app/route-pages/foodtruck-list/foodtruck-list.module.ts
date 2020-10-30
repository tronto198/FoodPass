import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { FoodtruckListPage } from './foodtruck-list.page';

import { CardviewComponent } from './foodtruck-cardview/cardview.component';
import { SharedComponentModule } from 'src/app/component/shared-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedComponentModule,
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
