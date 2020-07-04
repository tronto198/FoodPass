import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodtruckPage } from './foodtruck.page';

const routes: Routes = [
  {
    path: '',
    component: FoodtruckPage
  },
  {
    path: ':id',
    // component: FoodtruckInfoPage,
    loadChildren: () => import('./foodtruck-info/foodtruck-info.module').then( m => m.FoodtruckInfoPageModule)
  },
  {
    path: ':foodtruckId/:id',
    // component: MenuInfoPage
    loadChildren: () => import('./menu-info/menu-info.module').then( m => m.MenuInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodtruckPageRoutingModule {}
