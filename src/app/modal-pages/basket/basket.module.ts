import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';

import { BasketPageRoutingModule } from './basket-routing.module';

import { BasketPage } from './basket.page';
import { OrderComponentModule } from './order/order.module';
import { SharedComponentModule } from 'src/app/component/shared-component.module';
import { OrderComponent } from './order/order.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedComponentModule,
    BasketPageRoutingModule,
    // OrderComponentModule,
  ],
  exports: [
    BasketPage
  ],
  declarations: [
    BasketPage,
    OrderComponent
  ],
  providers: [
    ModalController,
  ]
})
export class BasketPageModule {}
