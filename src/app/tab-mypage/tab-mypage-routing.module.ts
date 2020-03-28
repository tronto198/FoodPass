import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabMypagePage } from './tab-mypage.page';

const routes: Routes = [
  {
    path: '',
    component: TabMypagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabMypagePageRoutingModule {}
