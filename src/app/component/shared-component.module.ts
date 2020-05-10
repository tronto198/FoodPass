import { NgModule } from '@angular/core';
import { OrderedMenuComponent } from './order-cardview/ordered-menu/ordered-menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderCardviewComponentModule } from './order-cardview/order-cardview.module';
import { OrderCardviewComponent } from './order-cardview/order-cardview.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        // OrderCardviewComponentModule
    ], 
    exports: [
        // OrderCardviewComponent
    ],
    declarations: [
    ],
})
export class SharedComponentModule {}
  