import { Component, Input, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(

    private modalCtrl : ModalController
  ) { }

  ngOnInit() {}

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
