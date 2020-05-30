import { Component, OnInit } from '@angular/core';

import { ToastController, ModalController } from '@ionic/angular';

import { BasketPage } from '../../modal-pages/basket/basket.page';
import { MapPage } from 'src/app/modal-pages/map/map.page';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { AngularFireMessaging } from '@angular/fire/messaging';


@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss']
})
export class TabHomePage implements OnInit {
  location: object;

  constructor(
    private toastController : ToastController,
    public modalController : ModalController,
    private pageData : PageDataStorageService,
    private afMessaging: AngularFireMessaging
  ) { }

  ngOnInit() {
    console.log("tab-home");
  }

  get testlocation(){
    return "test";
  }

  onToolbarClicked(){
    this.modalController.create({
      component: MapPage,
      cssClass: "modal-fullscreen"
    }
    ).then(s =>{
      s.present();
    });
  }

  onFabClicked(){
    this.modalController.create({
      component: BasketPage,
      cssClass: "modal-fullscreen"
    }
    ).then(s =>{
      s.present();
    });

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

  requestPushNotificationsPermission(){
    alert('requestPermission');
    // this.afMessaging.requestPermission.subscribe(()=>{
    //   alert('reqPermission');
    // },
    // (err) =>{
    //   alert('reqPermission error: ' + err);
    // });
    // Notification.requestPermission().then((permission) =>{
    //   if(permission === 'granted'){
    //     alert('granted');

    //   }
    //   else{
    //     alert('denied');
    //   }
    // })
    this.afMessaging.requestToken
    .subscribe(
      (token) => {
        console.log('Permission granted! Save to the server!', token);
        alert('permission granted');
      },
      (error) => {
        console.error(error);
        alert('permission denied');
        alert(error);
      }
    );
  }
}
