import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, PopoverController } from '@ionic/angular';
import { OrderComponent } from './order.component';
import { OrderedMenuComponent } from '../../../component/ordered-menu/ordered-menu.component';
// import { LongPressModule } from 'ionic-long-press';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // LongPressModule
  ],
  exports: [
    OrderComponent
  ],
  declarations: [
    OrderComponent,
  ],
  providers: [
    PopoverController
  ]
})
export class OrderComponentModule {}
