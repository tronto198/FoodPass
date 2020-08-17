import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderCardviewComponentModule } from './order-cardview/order-cardview.module';
import { OrderCardviewComponent } from './order-cardview/order-cardview.component';
import { TagWaitingComponentModule } from './tag-waiting/tag-waiting.module';
import { OwnerEditableLabelComponentModule } from './owner-editable-label/owner-editable-label.module';
import { FtViewComponentModule } from './ft-view/ft-view.module';
import { FtViewComponent } from './ft-view/ft-view.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TagWaitingComponentModule,
        OwnerEditableLabelComponentModule,
        FtViewComponentModule
        // OrderCardviewComponentModule,
    ], 
    exports: [
        FtViewComponent

    ],
    declarations: [
    ],
})
export class SharedComponentModule {}
  