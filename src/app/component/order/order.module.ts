import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { OrderComponent } from './order.component';
import { OrderedMenuComponent } from './ordered-menu/ordered-menu.component';
import { OrderedOptionComponent } from './ordered-menu/ordered-option/ordered-option.component';

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
    OrderedOptionComponent
  ],
  providers: []
})
export class OrderComponentModule {}
