import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodtruckInfoPageRoutingModule } from './foodtruck-info-routing.module';

import { FoodtruckInfoPage } from './foodtruck-info.page';
import { MenuInfoPageModule } from '../menu-info/menu-info.module';
import { MenuListComponent } from './menu-list/menu-list.component';
import { FtViewComponent } from 'src/app/component/ft-view/ft-view.component';
import { SharedComponentModule } from 'src/app/component/shared-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodtruckInfoPageRoutingModule,
    MenuInfoPageModule,
    SharedComponentModule
  ],
  exports: [
    FoodtruckInfoPage
  ],
  declarations: [
    FoodtruckInfoPage,
    MenuListComponent,
 
  ]
})
export class FoodtruckInfoPageModule {}
