import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataModule } from './app-data/app-data.module';
import { NotificationService } from './notification/notification.service';
import { SharedDataService } from './shared-data/shared-data.service';
import { SharedDataModule } from './shared-data/shared-data.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedDataModule,
    AppDataModule,
  ],
  providers: [
    NotificationService
  ]
})
export class RootServicesModule { }
