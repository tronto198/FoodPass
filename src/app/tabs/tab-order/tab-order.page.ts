import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab-order',
  templateUrl: './tab-order.page.html',
  styleUrls: ['./tab-order.page.scss'],
})
export class TabOrderPage implements OnInit {
  @ViewChild(IonSlides, {static: false}) slider : IonSlides;
  private pageValue: slide = slide.waitingOrder;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

  get slideValue(){
    return this.pageValue;
  }
  set slideValue(value : slide){
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

enum slide {
  waitingOrder,
  orderHistory,
};