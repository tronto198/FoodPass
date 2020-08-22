import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserAccountViewComponent } from './user-account-view.component';
import { UserImgComponent } from '../user-img/user-img.component';
import { UserNameComponent } from '../user-name/user-name.component';



@NgModule({
 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports:[
    UserAccountViewComponent
  ],
  declarations: [
    UserImgComponent,
    UserNameComponent,
    UserAccountViewComponent
  ],
})
export class UserAccountViewModule { }
