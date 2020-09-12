import { Component, OnInit, ViewChild } from '@angular/core';
import { PageControllerService } from 'src/app/services/page-controller.service';

@Component({
  selector: 'app-tab-order',
  templateUrl: './tab-order.page.html',
  styleUrls: ['./tab-order.page.scss'],
})
export class TabOrderPage implements OnInit {
  cnt : number = 1;
  constructor(
    private pageCtrl : PageControllerService,//historyCtrl
  ) { }

  ngOnInit() {
    // this.pageData.tabOrder.historyCtrl.getHistory();
  }
  get count(): number{
    return this.cnt;
  }
  addCount(){
    this.cnt++;
  }
  subCount(){
    if(this.cnt>1)this.cnt--;
  }
}