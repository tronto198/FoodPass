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

  constructor(
    private modalCtrl: ModalController,
    private basketCtrl: BasketControllerService
  ) { }

  ngOnInit() {
    this.basketCtrl.makeTestdata();
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  get totalPrice(){
    return this.basketCtrl.totalPrice;
  }

  get allChecked(){
    return this.basketCtrl.allCheck;
  }
  set allChecked(checked: boolean){
    this.basketCtrl.allCheck = checked;
  }
  get indeterminated(){
    return this.basketCtrl.indeterminate;
  }

  get orderKeys(){
    return this.basketCtrl.basketarr;
  }

  checkboxClicked(){
    this.basketCtrl.toggle();
  }

}
