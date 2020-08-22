import { Component, OnInit } from '@angular/core';
import { PageControllerService } from 'src/app/services/page-controller.service';

@Component({
  selector: 'comp-btn-basket',
  templateUrl: './btn-basket.component.html',
  styleUrls: ['./btn-basket.component.scss'],
})
export class BtnBasketComponent implements OnInit {

  constructor(private pageCtrl : PageControllerService) { }

  ngOnInit() {}

  routeBasket(){
    this.pageCtrl.presentBasket()
  }
}
