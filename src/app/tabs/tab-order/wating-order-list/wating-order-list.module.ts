import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WatingOrderListPageRoutingModule } from './wating-order-list-routing.module';

import { WatingOrderListPage } from './wating-order-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatingOrderListPageRoutingModule
  ],
  exports:[
    WatingOrderListPage
  ],
  declarations: [WatingOrderListPage]
})
export class WatingOrderListPageModule {}
