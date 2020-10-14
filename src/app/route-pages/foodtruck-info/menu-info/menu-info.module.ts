import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuInfoPageRoutingModule } from './menu-info-routing.module';

import { MenuInfoPage } from './menu-info.page';
import { FtMenuComponentsModule } from 'src/app/component/ft-menu/ft-menu.module';
import { SharedComponentModule } from 'src/app/component/shared-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuInfoPageRoutingModule,
    SharedComponentModule,
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
