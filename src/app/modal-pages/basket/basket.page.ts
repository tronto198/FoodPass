import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TabHomeControllerService } from 'src/app/services/tab-home-controller/tab-home-controller.service';
import { BasketControllerService } from 'src/app/services/basket-controller/basket-controller.service';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {
  teststr : string;

  constructor(
    private modalCtrl: ModalController,
    private pageCtrl: TabHomeControllerService,
    private basketCtrl: BasketControllerService
  ) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  get totalPrice(){
    return this.basketCtrl.totalPrice;
  }

}
