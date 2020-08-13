import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FtMenuComponent } from './ft-menu.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FtMenuImgComponent } from '../ft-menu-img/ft-menu-img.component';



@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,
    
  ], 
  exports: [
    FtMenuComponent
  ],
  declarations: [
    FtMenuComponent,
    FtMenuImgComponent
  ],
})
export class FtMenuComponentsModule { }
