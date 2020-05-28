import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuInfoPageRoutingModule } from './menu-info-routing.module';

import { MenuInfoPage } from './menu-info.page';
import { PickMenuOptionComponent } from 'src/app/component/pick-menu-option/pick-menu-option.component';
import { OptionListComponent } from 'src/app/component/option-list/option-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuInfoPageRoutingModule
  ],
  exports: [
    MenuInfoPage
  ],
  declarations: [
    MenuInfoPage,
    PickMenuOptionComponent,
    OptionListComponent
  ]
})
export class MenuInfoPageModule {}
