import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodtruckDataProvider } from './foodtruck.data.provider';
import { MenuDataProvider } from './menu.data.provider';
import { SharedDataModule } from '../shared-data/shared-data.module';
import { AppDataModule } from '../app-data/app-data.module';



@NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     SharedDataModule,
//     AppDataModule,
//   ],
  providers: [
    FoodtruckDataProvider,
    MenuDataProvider
  ]
})
export class DataProviderModule { }
