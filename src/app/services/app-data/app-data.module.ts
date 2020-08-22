import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDataStorageService } from './page-data-storage/page-data-storage.service';
import { PageControllerService } from '../page-controller.service';
import { CommunicationService } from '../communication/communication.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    CommunicationService,
    PageDataStorageService,
    PageControllerService,
  ]
})
export class AppDataModule { }
