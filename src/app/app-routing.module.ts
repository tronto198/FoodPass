import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, Router } from '@angular/router';
import { FoodtruckListPage } from './modal-pages/foodtruck-list/foodtruck-list.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'foodtruck',
    loadChildren: () => import('./modal-pages/foodtruck/foodtruck.module').then(m => m.FoodtruckPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./modal-pages/order-history/order-history.module').then( m => m.OrderHistoryPageModule)
  },
  {
    path: 'foodtruckList',
    // component: FoodtruckListPage
    loadChildren: () => import('./modal-pages/foodtruck-list/foodtruck-list.module').then( m => m.FoodtruckListPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
