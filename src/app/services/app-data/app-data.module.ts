import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataStoreService } from './data-store/data-store.service';
import { PageControllerService } from './page-controller/page-controller.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    DataStoreService,
    PageControllerService,
  ]
})
export class AppDataModule { }
