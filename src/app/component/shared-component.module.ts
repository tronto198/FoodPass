import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OwnerEditableLabelComponentModule } from './owner-editable-label/owner-editable-label.module';
import { TagDistComponent } from './tag-dist/tag-dist.component';
import { TagWaitingComponent } from './tag-waiting/tag-waiting.component';
import { StaticMapComponent } from './static-map/static-map.component';
import { BtnBasketComponent } from './btn-basket/btn-basket.component';
import { RootServicesModule } from '../services/root-services.module';
import { TagWaitingModule } from './tag-waiting/tag-waiting.module';
import { OwnerEditableLabelComponent } from './owner-editable-label/owner-editable-label.component';

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
        OwnerEditableLabelComponent
    ],
    declarations: [
    //     TagDistComponent,
        TagWaitingComponent,
    //     StaticMapComponent,
        BtnBasketComponent,
    ],
})
export class SharedComponentModule {}
  