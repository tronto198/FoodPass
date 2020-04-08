import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabHomePage } from './tab-home.page';
import { BasketPage } from '../../modal-pages/basket/basket.page';

const routes: Routes = [
  {
    path: '',
    component: TabHomePage,
    children: [
      {
        path: 'basket',
        component: BasketPage
        // loadChildren: () => import('./basket/basket.module').then( m => m.BasketPageModule)
      }
    ]
  }
  // {
  //   path: 'foodtruck-list/:id',
  //   loadChildren: () => import('./foodtruck-list/foodtruck-list.module').then( m => m.FoodtruckListPageModule)
  // },
  // {
  //   path: 'foodtruck-info/:id',
  //   loadChildren: () => import('./foodtruck-info/foodtruck-info.module').then( m => m.FoodtruckInfoPageModule)
  // },
  // {
  //   path: 'menu-info/:id',
  //   loadChildren: () => import('./menu-info/menu-info.module').then( m => m.MenuInfoPageModule)
  // }

  // {
  //   path: 'basket',
  //   component: BasketPage
  //   // loadChildren: () => import('./basket/basket.module').then( m => m.BasketPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabHomePageRoutingModule {}
