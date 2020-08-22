import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OwnerAccountViewComponent } from '../owner-account-view/owner-account-view.component';
import { OwnerCookingViewComponent } from './owner-cooking-view.component';



@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports:[
    OwnerCookingViewComponent
  ],
  declarations: [
    OwnerCookingViewComponent
  ],
})
export class OwnerCookingViewModule { }
