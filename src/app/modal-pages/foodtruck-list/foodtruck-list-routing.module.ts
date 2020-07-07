import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodtruckListPage } from './foodtruck-list.page';

const routes: Routes = [
  {
    path: '',
    component: FoodtruckListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodtruckListPageRoutingModule {}
