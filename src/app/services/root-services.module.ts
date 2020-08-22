import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataModule } from './app-data/app-data.module';
import { SharedDataService } from './shared-data/shared-data.service';
import { SharedDataModule } from './shared-data/shared-data.module';
import { MapService } from './map/map.service';
import { SearchService } from './search.service';
import { DataProviderModule } from './data-provider/data.provider.module';
import { DataCtrlModule } from './data-ctrl/data.ctrl.module';
import { NotificationService } from './notification.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedDataModule,
    AppDataModule,
    DataProviderModule,
    DataCtrlModule,
  ],
  providers: [
    NotificationService,
    MapService,
    SearchService,
  ]
})
export class RootServicesModule { }
