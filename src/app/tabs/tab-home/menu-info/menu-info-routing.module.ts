import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuInfoPage } from './menu-info.page';

const routes: Routes = [
  {
    path: '',
    component: MenuInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuInfoPageRoutingModule {}
