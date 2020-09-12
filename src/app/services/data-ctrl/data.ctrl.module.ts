import { NgModule } from '@angular/core';
import { FoodtruckDataCtrl } from './foodtruck.data.ctrl';
import { OrderDataCtrl } from './order.data.ctrl';

@NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     SharedDataModule,
//     AppDataModule,
//   ],
  providers: [
    FoodtruckDataCtrl,
    OrderDataCtrl
  ]
})
export class DataCtrlModule { }
