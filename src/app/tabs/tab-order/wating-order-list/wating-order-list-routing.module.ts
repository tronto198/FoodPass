import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WatingOrderListPage } from './wating-order-list.page';

const routes: Routes = [
  {
    path: '',
    component: WatingOrderListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WatingOrderListPageRoutingModule {}
