import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { TabOrderControllerService } from 'src/app/services/tab-order-controller/tab-order-controller.service';
import { orderSlide } from 'src/app/services/tab-order-controller/order-slide.enum';

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
    private pageCtrl : TabOrderControllerService
  ) { }

  ngOnInit() {
    this.pageValue = orderSlide.waitingOrder;
  }

  get pageValue(){
    return this.pageCtrl.pageValue;
  }
  set pageValue(no : orderSlide){
    this.pageCtrl.pageValue = no;
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