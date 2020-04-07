import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabHomePage } from './tab-home.page';
import { BasketPage } from './basket/basket.page';

const routes: Routes = [
  {
    path: 'home',
    component: TabHomePage
  },
  {
    path: 'basket',
    component: BasketPage,
    // loadChildren: () => import('./basket/basket.module').then( m => m.BasketPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabHomePageRoutingModule {}
