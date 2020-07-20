import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FtImgComponentModule } from '../ft-img/ft-img.module';
import { FtViewComponent } from './ft-view.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FtImgComponentModule
    ], 
    exports: [
        FtViewComponent
    ],
    declarations: [
        FtViewComponent
    ],
})
export class FtViewComponentModule {}
  