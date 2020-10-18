import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FtImgComponentModule } from '../ft-img/ft-img.module';
import { FtViewComponent } from './ft-view.component';
import { TagDistComponent } from '../tag-dist/tag-dist.component';
import { FtImgComponent } from '../ft-img/ft-img.component';
import { TagWaitingComponent } from '../tag-waiting/tag-waiting.component';

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
        TagDistComponent,
        TagWaitingComponent,
        FtViewComponent,
      
    ],
})
export class FtViewComponentModule {}
  