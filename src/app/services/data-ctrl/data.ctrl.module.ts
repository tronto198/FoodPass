import { NgModule } from '@angular/core';
import { FoodtruckDataCtrl } from './foodtruck.data.ctrl';

import { BasketDataCtrl } from './basket.data.ctrl';
import { HistoryDataCtrl } from './history.data.ctrl';
import { WaitingDataCtrl } from './waiting.data.ctrl';
import { LocationDataCtrl } from './location.data.ctrl';
import { ConfirmDataCtrl } from './confirm.data.ctrl';

@NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     SharedDataModule,
//     AppDataModule,
//   ],
  providers: [
    FoodtruckDataCtrl,
    ConfirmDataCtrl,
    BasketDataCtrl,
    HistoryDataCtrl,
    WaitingDataCtrl,
    LocationDataCtrl,
    BasketDataCtrl,
  ]
})
export class DataCtrlModule { }
