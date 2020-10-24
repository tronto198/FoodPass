import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';

import { BasketPageRoutingModule } from './basket-routing.module';

import { BasketPage } from './basket.page';
import { SharedComponentModule } from 'src/app/component/shared-component.module';
import { FtMenuItemComponentModule } from 'src/app/component/ft-menu-item/ft-menu-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedComponentModule,
    BasketPageRoutingModule,
    FtMenuItemComponentModule,
  ],
  exports: [
    BasketPage
  ],
  declarations: [
    BasketPage,
  ],
  providers: [
    ModalController,
  ]
})
export class BasketPageModule {}
