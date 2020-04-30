import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';

import { BasketPageRoutingModule } from './basket-routing.module';

import { BasketPage } from './basket.page';
import { OrderComponentModule } from './order/order.module';
import { SelectAmountComponent } from './order/select-amount/select-amount.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasketPageRoutingModule,
    OrderComponentModule
  ],
  exports: [
    BasketPage
  ],
  declarations: [
    BasketPage,
    // SelectAmountComponent
  ],
  providers: [
    ModalController,
  ]
})
export class BasketPageModule {}
