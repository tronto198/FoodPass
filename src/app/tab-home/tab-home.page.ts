import { Component, OnInit } from '@angular/core';

import { ToastController } from '@ionic/angular';
import { ServerConnecterService } from '../../services/server-connecter/server-connecter.service';

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit {
  private location : string;
  private heroes : string[];

  testno : number;
  constructor(
    private toastController : ToastController,
    private serverConnecter : ServerConnecterService
  ) { }

  ngOnInit() {
    this.location = "위치를 선택하세요";
    this.heroes = ["hh","dd","gs"];
    this.testno = 1;
  }

  fabclick(){
    let text = "new " + this.testno;
    this.heroes.push(text);
    this.testno++;

    let texts = this.serverConnecter.updateInfo();
    this.heroes = this.heroes.concat(texts);
    
    // this.toast(text).then(() =>{
    //   console.log('test');
    //   //t는 toast의 객체인듯
    //   }
    // ).catch((e)=>{
    //   console.log('error: ' + e);
    // });
    
    this.toast(text);

  }

  async toast(message : string){
    const toast = await this.toastController.create({
      header: "new text pushed",
      message : message,
      duration: 2000,
      position: "bottom",
      buttons : [
        {
          side: 'start',
          icon: 'star',
        }
      ]
    });
  }
  toastsync(message : string){
    const toast = this.toastController.create({
      header: "new text pushed",
      message : message,
      duration: 2000,
      position: "bottom",
      buttons : [
        {
          side: 'start',
          icon: 'star',
        }
      ]
    }).then((t)=>{
      t.present();
      console.log('toast presented');
    })
  }

  //todo: fab : 장바구니 가기
  //todo: 상단바 : 지도 가기
  //todo: 서비스 연결
}
