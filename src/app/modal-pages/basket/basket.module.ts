import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';

import { BasketPageRoutingModule } from './basket-routing.module';

import { BasketPage } from './basket.page';
import { OrderComponentModule } from 'src/app/component/order/order.module';
import { OrderComponent } from 'src/app/component/order/order.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // BasketPageRoutingModule,
    // OrderComponentModule
  ],
  exports: [
    BasketPage
    // OrderComponent
  ],
  declarations: [
    BasketPage,
    // OrderComponent
  ],
  providers: [ModalController]
})
export class BasketPageModule {}
