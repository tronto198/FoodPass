import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TabHomeControllerService } from 'src/app/services/tab-home-controller/tab-home-controller.service';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private pageCtrl: TabHomeControllerService
  ) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  get basket(){
    return this.pageCtrl.basket;
  }

}
