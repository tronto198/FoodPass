import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FtViewComponentModule } from './ft-view/ft-view.module';
import { FtViewComponent } from './ft-view/ft-view.component';
import { FtWaitingViewComponent } from './ft-waiting-view/ft-waiting-view.component';
import { FtOrderhistoryViewComponent } from './ft-orderhistory-view/ft-orderhistory-view.component';
import { FtMenuComponent } from './ft-menu/ft-menu.component';
import { FtMenuComponentsModule } from './ft-menu/ft-menu.module';
import { UserAccountViewModule } from './user-account-view/user-account-view.module';
import { UserAccountViewComponent } from './user-account-view/user-account-view.component';
import { OwnerAccountViewComponent } from './owner-account-view/owner-account-view.component';
import { OwnerAccountViewModule } from './owner-account-view/owner-account-view.module';
import { OwnerCookingViewComponent } from './owner-cooking-view/owner-cooking-view.component';
import { FtImgComponentModule } from './ft-img/ft-img.module';
import { OwnerEditableLabelComponentModule } from './owner-editable-label/owner-editable-label.module';
import { OwnerCookingViewModule } from './owner-cooking-view/owner-cooking-view.module';
import { BtnBasketComponent } from './btn-basket/btn-basket.component';
import { FtBasketViewComponent } from './ft-basket-view/ft-basket-view.component';
import { BasketItemComponent } from './ft-basket-view/basket-item/basket-item.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OwnerEditableLabelComponentModule,
        FtViewComponentModule,
        FtMenuComponentsModule,
        UserAccountViewModule,
        OwnerAccountViewModule,
        OwnerCookingViewModule
        // OrderCardviewComponentModule,
    ], 
    exports: [
        FtViewComponent,
        FtMenuComponent,
        BtnBasketComponent,
        FtWaitingViewComponent,
        FtBasketViewComponent,
        FtOrderhistoryViewComponent,
        UserAccountViewComponent,
        BasketItemComponent
        
    ],
    declarations: [
        BtnBasketComponent,
        FtWaitingViewComponent,
        FtBasketViewComponent,
        FtOrderhistoryViewComponent,
        BasketItemComponent

    ],
  
})
export class SharedComponentModule {}
  