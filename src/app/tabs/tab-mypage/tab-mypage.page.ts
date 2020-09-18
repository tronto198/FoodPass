import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { NotificationService } from 'src/app/services/notification.service';
import { PageControllerService } from 'src/app/services/page-controller.service';
import { FoodtruckData } from 'src/app/data/foodtruck';


@Component({
  selector: 'app-tab-mypage',
  templateUrl: './tab-mypage.page.html',
  styleUrls: ['./tab-mypage.page.scss'],
})
export class TabMypagePage implements OnInit {
  
  elementType = 'url';
  value = 'Techiediaries';
  
  myFoodtruck : FoodtruckData
  qrData : string


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
    this.qrData = 'http://localhost:8100/foodtruck/0';
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

  // getImage(): void {
  //   const canvas = document.querySelector("canvas") as HTMLCanvasElement;
  //   const imageData = canvas.toDataURL("image/jpeg").toString();
  //   alert(imageData);
  //   }
  
}
