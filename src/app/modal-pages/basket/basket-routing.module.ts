import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketPage } from './basket.page';
import { SelectAmountComponent } from './order/ordered-menu/select-amount/select-amount.component';

const routes: Routes = [
  {
    path: '',
    component: BasketPage
  },
  {
    path: 'select-amount',
    component: SelectAmountComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketPageRoutingModule {}
