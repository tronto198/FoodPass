import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataModule } from '../shared-data/shared-data.module';
import { FoodtruckDataProvider } from './foodtruck.data.provider';
import { MenuDataProvider } from './menu.data.provider';



@NgModule({
//   declarations: [],
  imports: [
    CommonModule,
    SharedDataModule,
  ],
  providers: [
    FoodtruckDataProvider,
    MenuDataProvider
  ]
})
export class DataProviderModule { }
