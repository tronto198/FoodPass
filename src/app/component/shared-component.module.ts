import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderCardviewComponentModule } from './order-cardview/order-cardview.module';
import { OrderCardviewComponent } from './order-cardview/order-cardview.component';
import { OwnerEditableLabelComponent } from './owner-edit/owner-editable-label.component';
import { OwnerEditableLabelComponentModule } from './owner-edit/owner-editable-label.module';
import { OrderWaitingComponent } from './order-waiting/order-waiting.component';
import { OrderWaitingComponentModule } from './order-waiting/order-waiting.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrderWaitingComponentModule,
        OwnerEditableLabelComponentModule,
        OrderCardviewComponentModule,
    ], 
    exports: [
        OrderWaitingComponent,
        OwnerEditableLabelComponent,
        OrderCardviewComponent,
    ],
    declarations: [
    ],
})
export class SharedComponentModule {}
  