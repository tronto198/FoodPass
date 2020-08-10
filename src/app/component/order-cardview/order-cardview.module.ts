import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderCardviewComponent } from './order-cardview.component';
import { HeaderBasketComponent } from './header-basket/header-basket.component';
import { HeaderWaitingComponent } from './header-waiting/header-waiting.component';
import { OrderedMenuComponent } from './ordered-menu/ordered-menu.component';
import { HeaderHistoryComponent } from './header-history/header-history.component';
import { OwnerEditableLabelComponentModule } from '../owner-editable-label/owner-editable-label.module';
import { TagWaitingComponentModule } from '../tag-waiting/tag-waiting.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TagWaitingComponentModule,
        OwnerEditableLabelComponentModule,
    ],
    exports: [
        OrderCardviewComponent
    ],
    declarations: [
        OrderCardviewComponent,
        HeaderBasketComponent,
        HeaderWaitingComponent,
        HeaderHistoryComponent,
        OrderedMenuComponent,
    ],
    providers: [
    ]
})
export class OrderCardviewComponentModule {}
  