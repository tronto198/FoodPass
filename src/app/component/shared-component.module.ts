import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OwnerEditableLabelComponentModule } from './owner-editable-label/owner-editable-label.module';
import { TagWaitingComponent } from './tag-waiting/tag-waiting.component';
import { BtnBasketComponent } from './btn-basket/btn-basket.component';
import { OwnerEditableLabelComponent } from './owner-editable-label/owner-editable-label.component';
import { FtBasketViewComponent } from './ft-basket-view/ft-basket-view.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OwnerEditableLabelComponentModule,
        // TagWaitingModule
    ], 
    exports: [
    //     TagDistComponent,
        TagWaitingComponent,
    //     StaticMapComponent,
        BtnBasketComponent,
        OwnerEditableLabelComponent,
        FtBasketViewComponent,
    ],
    declarations: [
    //     TagDistComponent,
        TagWaitingComponent,
    //     StaticMapComponent,
        BtnBasketComponent,
        FtBasketViewComponent,
    ]
})
export class SharedComponentModule {}
  