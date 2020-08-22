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
import { BtnBasketComponent } from './btn-basket/btn-basket.component';
import { FtWaitingViewComponent } from './ft-waiting-view/ft-waiting-view.component';
import { FtBasketViewComponent } from './ft-basket-view/ft-basket-view.component';
import { FtOrderhistoryViewComponent } from './ft-orderhistory-view/ft-orderhistory-view.component';

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
        FtViewComponent,
        BtnBasketComponent,
        FtWaitingViewComponent,
        FtBasketViewComponent,
        FtOrderhistoryViewComponent

    ],
    declarations: [
        BtnBasketComponent,
        FtWaitingViewComponent,
        FtBasketViewComponent,
        FtOrderhistoryViewComponent
    ],
})
export class SharedComponentModule {}
  