import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, PopoverController } from '@ionic/angular';
import { OrderComponent } from './order.component';
import { OrderedMenuComponent } from './ordered-menu/ordered-menu.component';
import { SelectAmountComponent } from './ordered-menu/select-amount/select-amount.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    OrderComponent
  ],
  declarations: [
    OrderComponent,
    OrderedMenuComponent,
    SelectAmountComponent
  ],
  providers: [
    PopoverController
  ]
})
export class OrderComponentModule {}
