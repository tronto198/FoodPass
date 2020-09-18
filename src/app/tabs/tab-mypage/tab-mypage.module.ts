import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabMypagePageRoutingModule } from './tab-mypage-routing.module';

import { TabMypagePage } from './tab-mypage.page';
import { SharedComponentModule } from 'src/app/component/shared-component.module';

// import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabMypagePageRoutingModule,
    SharedComponentModule,
    QRCodeModule,
    // NgxQRCodeModule,
  ],
  declarations: [TabMypagePage]
})
export class TabMypagePageModule {}
