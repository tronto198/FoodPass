import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataService } from './shared-data/shared-data.service';
import { SharedDataModule } from './shared-data/shared-data.module';
import { MapService } from './map/map.service';
import { SearchService } from './search.service';
import { DataProviderModule } from './data-provider/data.provider.module';
import { DataCtrlModule } from './data-ctrl/data.ctrl.module';
import { NotificationService } from './notification.service';
import { PageControllerService } from './page-controller.service';
import { CommunicationService } from './communication/communication.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedDataModule,
    DataProviderModule,
    DataCtrlModule,
  ],
  providers: [
    CommunicationService,
    NotificationService,
    PageControllerService,
    MapService,
    SearchService,
  ]
})
export class RootServicesModule { }
