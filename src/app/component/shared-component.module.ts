import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderCardviewComponentModule } from './order-cardview/order-cardview.module';
import { OrderCardviewComponent } from './order-cardview/order-cardview.component';
import { OwnerEditComponent } from './owner-edit/owner-edit.component';
import { OwnerEditComponentModule } from './owner-edit/owner-edit.module';
import { OrderWaitingComponent } from './order-waiting/order-waiting.component';
import { OrderWaitingComponentModule } from './order-waiting/order-waiting.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrderWaitingComponentModule,
        OwnerEditComponentModule,
        OrderCardviewComponentModule,
    ], 
    exports: [
        OrderWaitingComponent,
        OwnerEditComponent,
        OrderCardviewComponent,
    ],
    declarations: [
    ],
})
export class SharedComponentModule {}
  