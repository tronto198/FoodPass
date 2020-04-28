import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitingOrderListPageRoutingModule } from './waiting-order-list-routing.module';

import { WaitingOrderListPage } from './waiting-order-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitingOrderListPageRoutingModule
  ],
  exports:[
    WaitingOrderListPage
  ],
  declarations: [WaitingOrderListPage]
})
export class WaitingOrderListPageModule {}
