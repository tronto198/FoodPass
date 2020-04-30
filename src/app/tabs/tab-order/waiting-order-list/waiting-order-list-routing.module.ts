import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaitingOrderListPage } from './waiting-order-list.page';

const routes: Routes = [
  {
    path: '',
    component: WaitingOrderListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitingOrderListPageRoutingModule {}
