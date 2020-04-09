import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabHomePage } from './tab-home.page';
import { BasketPage } from '../../modal-pages/basket/basket.page';
import { FoodtruckInfoPage } from './foodtruck-info/foodtruck-info.page';
import { MapComponent } from 'src/component/map/map.component';

const routes: Routes = [
  {
    path: '',
    component: TabHomePage,
    children: [
      {
        //이거 있어야 modal 가능
        path: 'basket',
        component: BasketPage
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'foodtruck-info/:id',
        component: FoodtruckInfoPage
        // loadChildren: () => import('./foodtruck-info/foodtruck-info.module').then( m => m.FoodtruckInfoPageModule)
      },
      {
        path: 'menu-info/:id',
        loadChildren: () => import('./menu-info/menu-info.module').then( m => m.MenuInfoPageModule)
      }
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
