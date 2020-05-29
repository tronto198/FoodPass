import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderWaitingComponent } from './order-waiting.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ], 
    exports: [
        OrderWaitingComponent,
    ],
    declarations: [
        OrderWaitingComponent
    ],
})
export class OrderWaitingComponentModule {}
  