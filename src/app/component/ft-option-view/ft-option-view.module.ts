import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FtOptionComponent } from './ft-option-view.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,

  ], 
  exports: [
    FtOptionComponent
  ],
  declarations: [
    FtOptionComponent
   
  ],
})
export class FtOptionComponentsModule { }
