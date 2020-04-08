import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabHomePage } from './tab-home.page';
import { BasketPage } from './basket/basket.page';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: '',
    component: TabHomePage,
    children: [
      {
        path: 'basket',
        component: BasketPage
        // loadChildren: () => import('./basket/basket.module').then( m => m.BasketPageModule)
      },
      {
        path: 'home',
        // component: HomePage
        loadChildren: () => import('./home/home.module').then( m=> m.HomePageModule)
      }
        // component: HomePage,
        // loadChildren: () => import('./home/home.module').then( m=> m.HomePageModule)
      // ,
      // {
      //   path: '',
      //   redirectTo: 'home',
      //   pathMatch: 'full'
      // }
    ]
  }
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
