import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FtMenuImgComponent } from './ft-menu-img.component';



@NgModule({
 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports:[
    FtMenuImgComponent
  ],

  declarations: [
    FtMenuImgComponent,
    
  ]
})
export class FtMenuImgModule { }
