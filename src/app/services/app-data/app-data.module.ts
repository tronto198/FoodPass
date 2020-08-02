import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDataStorageService } from './page-data-storage/page-data-storage.service';
import { PageControllerService } from '../page-controller.service';
import { DataControllerService } from './data-controller/data-controller.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    DataControllerService,
    PageDataStorageService,
    PageControllerService,
  ]
})
export class AppDataModule { }
