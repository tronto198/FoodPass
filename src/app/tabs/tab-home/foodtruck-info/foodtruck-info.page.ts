import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TabHomeControllerService } from 'src/app/services/tab-home-controller/tab-home-controller.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foodtruck-info',
  templateUrl: './foodtruck-info.page.html',

  styleUrls: ['./foodtruck-info.page.scss'],
})
export class FoodtruckInfoPage implements OnInit {
  routedata: string;
  menuList:string[];

  constructor(
    private pageCtrl : TabHomeControllerService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.pageCtrl.find = true;
    this.routedata = this.route.snapshot.paramMap.get("id");
    this.menuList=["와플", "도넛"];
  }

  test(){
    this.pageCtrl.find = false;
    
  }

  get data(){
    return this.pageCtrl.test;
  }
}


