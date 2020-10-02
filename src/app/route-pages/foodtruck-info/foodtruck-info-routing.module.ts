import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodtruckInfoPage } from './foodtruck-info.page';
import { SharedComponentModule } from 'src/app/component/shared-component.module';

const routes: Routes = [
  {
    path: ':id',
    component: FoodtruckInfoPage
  },
  {
    path: ':foodtruckId/:id',
    // component: MenuInfoPage
    loadChildren: () => import('./menu-info/menu-info.module').then( m => m.MenuInfoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    
  ],
  exports: [
    RouterModule
  ],
})
export class FoodtruckInfoPageRoutingModule {}
