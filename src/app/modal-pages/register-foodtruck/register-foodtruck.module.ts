import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFoodtruckPageRoutingModule } from './register-foodtruck-routing.module';

import { RegisterFoodtruckPage } from './register-foodtruck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFoodtruckPageRoutingModule
  ],
  declarations: [RegisterFoodtruckPage]
})
export class RegisterFoodtruckPageModule {}
