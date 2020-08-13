import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FtMenuItemComponent } from './ft-menu-item.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ], 
    exports: [
        FtMenuItemComponent
    ],
    declarations: [
        FtMenuItemComponent
    ],
})
export class FtMenuItemComponentModule {}
  