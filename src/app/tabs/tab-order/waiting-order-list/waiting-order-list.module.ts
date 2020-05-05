import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitingOrderListPageRoutingModule } from './waiting-order-list-routing.module';

import { WaitingOrderListPage } from './waiting-order-list.page';
import { OrderCardviewComponent22 } from './order-cardview/order-cardview.component';
import { OrderedMenuComponent } from 'src/app/component/order-cardview/ordered-menu/ordered-menu.component';
import { SharedComponentModule } from 'src/app/component/shared-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitingOrderListPageRoutingModule,
    SharedComponentModule,
  ],
  exports:[
    WaitingOrderListPage
  ],
  declarations: [
    WaitingOrderListPage,
    OrderCardviewComponent22,
  ]
})
export class WaitingOrderListPageModule {}
