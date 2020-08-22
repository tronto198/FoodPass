import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataModule } from './app-data/app-data.module';
import { NotificationService } from './notification.service';
import { SharedDataService } from './shared-data/shared-data.service';
import { SharedDataModule } from './shared-data/shared-data.module';
import { MapService } from './map/map.service';
import { FoodtruckDataCtrl } from './data-ctrl/foodtruck.data.ctrl';
import { DataCtrlModule } from './data-ctrl/data.ctrl.module';
import { DataProviderModule } from './data-provider/data.provider.module';



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
  ]
})
export class RootServicesModule { }
