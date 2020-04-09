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
  private test : string;
  testno : number;
  constructor(//생성자
    private toastController : ToastController,//의존성 주입을 통해 받은 애들(파라미터)
    private serverConnecter : ServerConnecterService
  ) { }//여기 안에서 초기화해주는거

  ngOnInit() {
    this.location = "위치를 선택하세요";
    this.heroes = ["hh","dd","gs"];
    this.testno = 1;
    this.test = "test";
  }

  fabclick(){
    this.test = "fab clicked";
    let text = "new " + this.testno;
    this.heroes.push(text);
    this.testno++;

    let texts = this.serverConnecter.updateInfo();//서버 커넥터가 의존성 주입을 통해서 받은 클래스
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
    toast.present();
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
