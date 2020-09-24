import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'modal-register-foodtruck',
  templateUrl: './register-foodtruck.page.html',
  styleUrls: ['./register-foodtruck.page.scss'],
})
export class RegisterFoodtruckPage implements OnInit {

  ftName : string;
  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
