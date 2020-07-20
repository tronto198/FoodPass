import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FtImgComponent } from './ft-img.component';
import { StaticMapComponent } from '../static-map/static-map.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ], 
    exports: [
        FtImgComponent,
    ],
    declarations: [
        FtImgComponent,
        StaticMapComponent,
    ],
})
export class FtImgComponentModule {}
  