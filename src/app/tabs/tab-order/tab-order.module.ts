import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabOrderPageRoutingModule } from './tab-order-routing.module';

import { TabOrderPage } from './tab-order.page';
import { WatingOrderListPageModule } from './wating-order-list/wating-order-list.module';
import { OrderHistoryListPageModule } from './order-history-list/order-history-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabOrderPageRoutingModule,
    WatingOrderListPageModule,
    OrderHistoryListPageModule
  ],
  declarations: [TabOrderPage]
})
export class TabOrderPageModule {}
