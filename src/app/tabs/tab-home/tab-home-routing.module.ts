import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabHomePage } from './tab-home.page';
import { FtViewComponent } from 'src/app/component/ft-view/ft-view.component';


const routes: Routes = [
  {
    path: '',
    component: TabHomePage,
    // pathMatch: 'full'
  },
  {
    path: 'ft-preview',
    component: FtViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabHomePageRoutingModule {}
