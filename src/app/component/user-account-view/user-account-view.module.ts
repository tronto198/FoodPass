import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserAccountViewComponent } from './user-account-view.component';
import { UserImgComponent } from '../user-img/user-img.component';
import { UserNameComponent } from '../user-name/user-name.component';
import { UserImgComponentModule } from '../user-img/user-img.module';



@NgModule({
 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserImgComponentModule
  ],
  exports:[
    UserAccountViewComponent
  ],
  declarations: [
    UserNameComponent,
    UserAccountViewComponent
  ],
})
export class UserAccountViewModule { }
