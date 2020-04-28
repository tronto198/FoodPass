import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabOrderPage } from './tab-order.page';
import { WatingOrderListPage } from './wating-order-list/wating-order-list.page';
import { OrderHistoryListPage } from './order-history-list/order-history-list.page';

const routes: Routes = [
  {
    path: '',
    component: TabOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabOrderPageRoutingModule {}
