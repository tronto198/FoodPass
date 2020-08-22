import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderCardviewComponentModule } from './order-cardview/order-cardview.module';
import { OrderCardviewComponent } from './order-cardview/order-cardview.component';
import { TagWaitingComponentModule } from './tag-waiting/tag-waiting.module';
import { OwnerEditableLabelComponentModule } from './owner-editable-label/owner-editable-label.module';
import { FtViewComponentModule } from './ft-view/ft-view.module';
import { FtViewComponent } from './ft-view/ft-view.component';
import { FtMenuComponent } from './ft-menu/ft-menu.component';
import { FtMenuComponentsModule } from './ft-menu/ft-menu.module';
import { UserAccountViewModule } from './user-account-view/user-account-view.module';
import { UserAccountViewComponent } from './user-account-view/user-account-view.component';
import { OwnerAccountViewComponent } from './owner-account-view/owner-account-view.component';
import { OwnerAccountViewModule } from './owner-account-view/owner-account-view.module';
import { OwnerCookingViewComponent } from './owner-cooking-view/owner-cooking-view.component';
import { OwnerCookingViewModule } from './owner-cooking-view/owner-cooking-view.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TagWaitingComponentModule,
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
        UserAccountViewComponent,
        OwnerAccountViewComponent,
        OwnerCookingViewComponent

    ],
    declarations: [
    ],
})
export class SharedComponentModule {}
  