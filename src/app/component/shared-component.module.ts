import { NgModule } from '@angular/core';
import { OrderedMenuComponent } from './ordered-menu/ordered-menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    exports: [
        OrderedMenuComponent
    ],
    declarations: [
        OrderedMenuComponent
    ],
})
export class SharedComponentModule {}
  