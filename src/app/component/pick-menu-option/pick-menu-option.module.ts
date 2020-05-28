import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OptionListComponent } from './option-list/option-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    exports: [
        OptionListComponent
    ],
    declarations: [
        OptionListComponent
    ],
    providers: [
        
    ]
})
export class PickMenuOptionModule {}
  