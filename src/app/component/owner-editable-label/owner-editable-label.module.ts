import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OwnerEditableLabelComponent } from './owner-editable-label.component';
import { TagWaitingComponent } from '../tag-waiting/tag-waiting.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    exports: [
        OwnerEditableLabelComponent
    ],
    declarations: [
        OwnerEditableLabelComponent,
    ],
    providers: [
        
    ]
})
export class OwnerEditableLabelComponentModule {}
  