import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { orderSlide } from 'src/app/services/app-data/page-data-storage/tab-order-data/tab-order-slide.enum';
import { PageControllerService } from 'src/app/services/app-data/page-controller/page-controller.service';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';

@Component({
  selector: 'app-tab-order',
  templateUrl: './tab-order.page.html',
  styleUrls: ['./tab-order.page.scss'],
})
export class TabOrderPage implements OnInit {

  constructor(
    private pageCtrl : PageControllerService,
    private pageData : PageDataStorageService,
  ) { }

  ngOnInit() {
    this.pageData.tabOrder.historyCtrl.getHistory();
  }

}