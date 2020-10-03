import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuInfoPageRoutingModule } from './menu-info-routing.module';

import { MenuInfoPage } from './menu-info.page';
import { FtMenuComponentsModule } from 'src/app/component/ft-menu/ft-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuInfoPageRoutingModule,
    FtMenuComponentsModule
  ],
  exports: [
    MenuInfoPage
  ],
  declarations: [
    MenuInfoPage,
  ]
})
export class MenuInfoPageModule {}
