import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabMypagePage } from './tab-mypage.page';
import { SharedComponentModule } from 'src/app/component/shared-component.module';
import { RegisterFoodtruckPage } from 'src/app/modal-pages/register-foodtruck/register-foodtruck.page';

const routes: Routes = [
  {
    path: '',
    component: TabMypagePage
  },
  {
    path: 'register',
    component: RegisterFoodtruckPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
   ],
  exports: [RouterModule],
})
export class TabMypagePageRoutingModule {}
