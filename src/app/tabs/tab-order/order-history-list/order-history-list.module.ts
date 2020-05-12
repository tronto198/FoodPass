import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderHistoryListPageRoutingModule } from './order-history-list-routing.module';

import { OrderHistoryListPage } from './order-history-list.page';
import { OrderHistoryService } from 'src/app/services/order-history/order-history.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderHistoryListPageRoutingModule
  ],
  exports:[
    OrderHistoryListPage
  ],
  declarations: [OrderHistoryListPage],
  providers : [
  ]
})
export class OrderHistoryListPageModule {}
