import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderHistoryListPageRoutingModule } from './order-history-list-routing.module';

import { OrderHistoryListPage } from './order-history-list.page';
import { OrderCardviewComponentModule } from 'src/app/component/order-cardview/order-cardview.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderHistoryListPageRoutingModule,
    OrderCardviewComponentModule
  ],
  exports:[
    OrderHistoryListPage
  ],
  declarations: [OrderHistoryListPage],
  providers : [
  ]
})
export class OrderHistoryListPageModule {}
