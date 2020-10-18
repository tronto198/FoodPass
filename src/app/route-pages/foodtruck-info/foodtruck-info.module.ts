import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodtruckInfoPageRoutingModule } from './foodtruck-info-routing.module';

import { FoodtruckInfoPage } from './foodtruck-info.page';
import { FtViewComponent } from 'src/app/component/ft-view/ft-view.component';
import { SharedComponentModule } from 'src/app/component/shared-component.module';
import { MenuInfoPageModule } from './menu-info/menu-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodtruckInfoPageRoutingModule,
    SharedComponentModule,
    MenuInfoPageModule
  ],
  exports: [
    FoodtruckInfoPage
  ],
  declarations: [
    FoodtruckInfoPage,
 
  ]
})
export class FoodtruckInfoPageModule {}
