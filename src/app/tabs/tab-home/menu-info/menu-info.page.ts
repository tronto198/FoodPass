import { Component, OnInit, AfterViewChecked, AfterContentChecked, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { BasketControllerService } from 'src/app/services/basket-controller/basket-controller.service';
import { OptionData } from 'src/app/data/option';

@Component({
  selector: 'app-menu-info',
  templateUrl: './menu-info.page.html',
  styleUrls: ['./menu-info.page.scss'],
})
export class MenuInfoPage implements OnInit, AfterContentInit {
  foodtruckId: number;
  menuId: number;

  foodtruckInfo: FoodtruckData;
  menuInfo: MenuData;
  optionInfo: OptionData;
  amount: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private basketCtrl: BasketControllerService,
  ) { }

  ngOnInit() {
    this.foodtruckId = Number(this.route.snapshot.paramMap.get("foodtruckId"));
    this.menuId = Number(this.route.snapshot.paramMap.get("id"));
    // this.menuList = this.serverConnecter.getMenuData(this.routedata);
    // console.log(this.route.snapshot.paramMap.get("foodtruckId"));
    // console.log(this.route.snapshot.paramMap.get("id"));

    // history.pushState(null, "foodtruck", `/tabs/home/foodtruck/${this.foodtruckId}`);
    this.comeByWebAddress();
  }

  comeByWebAddress(){
    //foodtruckinfo 를 원래는 위에서 받아오지만
    //만약 웹으로 받아왔다면 여기에는 없는 자료, 그걸로 판별

    //foodtruckinfo를 서버에서 다운로드
  }

  ngAfterContentInit(){
    if(isNaN(this.menuId) || isNaN(this.foodtruckId)){
      this.router.navigateByUrl('/tabs/home');
    }
  }


  orderToBasket(){
    this.basketCtrl.push(this.foodtruckInfo, this.menuInfo, this.optionInfo, this.amount);
  }


}
