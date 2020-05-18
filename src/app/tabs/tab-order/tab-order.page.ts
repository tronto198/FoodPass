import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { orderSlide } from 'src/app/services/app-data/page-controller/tab-order-slide.enum';
import { PageControllerService } from 'src/app/services/app-data/page-controller/page-controller.service';

@Component({
  selector: 'app-tab-order',
  templateUrl: './tab-order.page.html',
  styleUrls: ['./tab-order.page.scss'],
})
export class TabOrderPage implements OnInit {
  @ViewChild(IonSlides, {static: false}) slider : IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(
    private pageCtrl : PageControllerService
  ) { }

  ngOnInit() {
    this.pageValue = orderSlide.waitingOrder;
  }

  get pageValue(){
    return this.pageCtrl.orderSlideValue;
  }
  set pageValue(no : orderSlide){
    this.pageCtrl.orderSlideValue = no;
  }

  get slideValue(){
    return this.pageValue;
  }
  set slideValue(value : orderSlide){
    this.pageValue = value;
    this.slider.slideTo(this.pageValue);
  }

  segmentChanged(ev: CustomEvent) {
    this.slideValue = Number(ev.detail.value);
  }

  slideChanged(){
    this.slider.getActiveIndex().then(v =>{
      this.slideValue = v;
    });
  }

}