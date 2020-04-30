import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderHistoryListPage } from './order-history-list.page';

const routes: Routes = [
  {
    path: '',
    component: OrderHistoryListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderHistoryListPageRoutingModule {}
