import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./tab-home/tab-home.module').then(m => m.TabHomePageModule)
          }
        ]
      },
      {
        path: 'tab-order',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./tab-order/tab-order.module').then(m => m.TabOrderPageModule)
          }
        ]
      },
      {
        path: 'tab-mypage',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./tab-mypage/tab-mypage.module').then(m => m.TabMypagePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab-home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
