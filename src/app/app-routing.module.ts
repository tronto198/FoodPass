import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, Router } from '@angular/router';
import { FoodtruckListPage } from './route-pages/foodtruck-list/foodtruck-list.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'foodtruck',
    loadChildren: () => import('./route-pages/foodtruck-info/foodtruck-info.module').then(m => m.FoodtruckInfoPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./modal-pages/order-history/order-history.module').then( m => m.OrderHistoryPageModule)
  },
  {
    path: 'foodtruckList',
    component: FoodtruckListPage
    // loadChildren: () => import('./modal-pages/foodtruck-list/foodtruck-list.module').then( m => m.FoodtruckListPageModule)
  },
  {
    path: 'basket',
    loadChildren: () => import('./modal-pages/basket/basket.module').then( m => m.BasketPageModule)
  },
  {
    path: 'register-foodtruck',
    loadChildren: () => import('./modal-pages/register-foodtruck/register-foodtruck.module').then( m => m.RegisterFoodtruckPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
