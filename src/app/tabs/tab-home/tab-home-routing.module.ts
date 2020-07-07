import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabHomePage } from './tab-home.page';
import { BasketPage } from '../../modal-pages/basket/basket.page';
import { MapPage } from '../../modal-pages/map/map.page';


const routes: Routes = [
  {
    path: '',
    component: TabHomePage,
    // pathMatch: 'full'
  },
  {
    //이거 있어야 modal 가능
    path: 'basket',
    // component: BasketPage
    loadChildren: () => import('src/app/modal-pages/basket/basket.module').then( m => m.BasketPageModule)
  },
  {
    path: 'map',
    component: MapPage,
    // loadChildren: () => import('src/app/modal-pages/map/map.page').then(m=> m.MapPage);
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabHomePageRoutingModule {}
