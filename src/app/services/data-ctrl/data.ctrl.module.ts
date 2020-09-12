import { NgModule } from '@angular/core';
import { FoodtruckDataCtrl } from './foodtruck.data.ctrl';
import { OrderDataCtrl } from './order.data.ctrl';
import { BasketDataCtrl } from './basket.data.ctrl';
import { HistoryDataCtrl } from './history.data.ctrl';
import { WaitingDataCtrl } from './waiting.data.ctrl';

@NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     SharedDataModule,
//     AppDataModule,
//   ],
  providers: [
    FoodtruckDataCtrl,
    OrderDataCtrl,
    BasketDataCtrl,
    HistoryDataCtrl,
    WaitingDataCtrl,
    
  ]
})
export class DataCtrlModule { }
