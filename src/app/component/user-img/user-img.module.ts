import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserImgComponent } from './user-img.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ], 
    exports: [
       UserImgComponent
    ],
    declarations: [
        UserImgComponent
    ],
})
export class UserImgComponentModule {}
  