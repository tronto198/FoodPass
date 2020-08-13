import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { FoodtruckListPage } from './foodtruck-list.page';

import { CardviewComponent } from './foodtruck-cardview/cardview.component';
import { TagWaitingComponentModule } from 'src/app/component/tag-waiting/tag-waiting.module';
import { FtViewComponent } from 'src/app/component/ft-view/ft-view.component';
import { SharedComponentModule } from 'src/app/component/shared-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TagWaitingComponentModule,
    SharedComponentModule
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
