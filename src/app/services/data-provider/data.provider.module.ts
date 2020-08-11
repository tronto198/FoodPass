import { NgModule } from '@angular/core';
import { FoodtruckDataProvider } from './foodtruck.data.provider';
import { MenuDataProvider } from './menu.data.provider';



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
