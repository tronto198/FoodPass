import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFoodtruckPage } from './register-foodtruck.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterFoodtruckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterFoodtruckPageRoutingModule {}
