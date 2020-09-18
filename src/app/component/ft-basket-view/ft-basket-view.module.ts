import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FtImgComponentModule } from '../ft-img/ft-img.module';
import { FtBasketViewComponent } from './ft-basket-view.component';
import { BasketItemComponent } from './basket-item/basket-item.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ], 
    exports: [
        FtBasketViewComponent,
        BasketItemComponent
    ],
    declarations: [
        FtBasketViewComponent,
        BasketItemComponent
    ],
})
export class FtViewComponentModule {}
  