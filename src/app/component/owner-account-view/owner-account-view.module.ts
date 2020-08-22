import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OwnerAccountViewComponent } from './owner-account-view.component';
import { FtImgComponent } from '../ft-img/ft-img.component';
import { SharedComponentModule } from '../shared-component.module';
import { FtImgComponentModule } from '../ft-img/ft-img.module';



@NgModule({
 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FtImgComponentModule
    //SharedComponentModule
  ],
  exports:[
    OwnerAccountViewComponent
  ],
  declarations: [
    //FtImgComponent,
    OwnerAccountViewComponent
  ],
})
export class OwnerAccountViewModule { }
