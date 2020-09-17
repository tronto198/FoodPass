import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { NotificationService } from 'src/app/services/notification.service';
import { PageControllerService } from 'src/app/services/page-controller.service';
import { FoodtruckData } from 'src/app/data/foodtruck';
// import { QRCodeModule } from 'angular2-qrcode';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

@Component({
  selector: 'app-tab-mypage',
  templateUrl: './tab-mypage.page.html',
  styleUrls: ['./tab-mypage.page.scss'],
})
export class TabMypagePage implements OnInit {

  myFoodtruck : FoodtruckData
  myFoodtruckUrl : string
  
  qrData = 'http://gaeyou.com'
  scanCode = null
  elementType: 'url' | 'canvas' | 'img' = 'canvas'


  constructor(
    private config : SharedDataService,
    private push : NotificationService,
    private pageCtrl : PageControllerService,
    // private base64ToGallery : Base64ToGallery
  ) { }



  ngOnInit() {
    this.myFoodtruck = {
      id: 10011,
      name: "master",
      introduction: "운영자용 수정 푸드트럭",
      notice: "수정 공지"
    }
    // this.myFoodtruckUrl = "http://localhost:8100/foodtruck/"+this.myFoodtruck.id;
    
    // this.myFoodtruckUrl = "http://localhost:8100/foodtruck/"+this.myFoodtruck.id;
  }


  get admin() : boolean{
    return this.config.foodtruckOwner;
  }

  set admin(b : boolean){
    this.config.foodtruckOwner = b;
  }

  requestPermission(){
    // this.push.requestPermission()
    console.log('requestPermission');
  }

  showOrderHistory(){
    this.pageCtrl.presentOrderHistory();
  }

  master(){
    this.admin = true;
    this.pageCtrl.presentFoodtruck();
  }

  get qrcode() : string{
    return this.myFoodtruckUrl;
  }

  downloadQR() {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement
    const imageData = canvas.toDataURL('image/jpeg').toString()
    console.log(imageData)

    let data = imageData.split(',')[1]

  //   this.base64ToGallery
  //       .base64ToGallery(data, {prefix: '_img', mediaScanner: true})
  //       .then(async res => {
  //         // let toast = await this.toastCtrl.create({
  //         //   header: 'QR Code saved in your phone'
  //         // }
  //         // )
  //         // toast.present()
  //       }, err => console.log(err))
   }
}
