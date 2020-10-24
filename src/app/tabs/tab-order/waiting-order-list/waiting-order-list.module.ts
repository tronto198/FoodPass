import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitingOrderListPageRoutingModule } from './waiting-order-list-routing.module';

import { WaitingOrderListPage } from './waiting-order-list.page';
import { FtWaitingViewComponent } from 'src/app/component/ft-waiting-view/ft-waiting-view.component';
import { SharedComponentModule } from 'src/app/component/shared-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitingOrderListPageRoutingModule,
    SharedComponentModule,
    // OrderCardviewComponentModule
  ],
  exports:[
    WaitingOrderListPage
  ],
  declarations: [
    WaitingOrderListPage,
  ]
})
export class WaitingOrderListPageModule {}
