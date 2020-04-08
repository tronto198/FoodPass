import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodtruckInfoPage } from './foodtruck-info.page';

const routes: Routes = [
  {
    path: '',
    component: FoodtruckInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodtruckInfoPageRoutingModule {}
