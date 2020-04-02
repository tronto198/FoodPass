import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabMypagePageRoutingModule } from './tab-mypage-routing.module';

import { TabMypagePage } from './tab-mypage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabMypagePageRoutingModule
  ],
  declarations: [TabMypagePage]
})
export class TabMypagePageModule {}
