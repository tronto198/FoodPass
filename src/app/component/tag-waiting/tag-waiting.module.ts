import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TagWaitingComponent } from './tag-waiting.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ], 
    exports: [
        TagWaitingComponent,
    ],
    declarations: [
        TagWaitingComponent
    ],
})
export class TagWaitingComponentModule {}
  