// import { Component, OnInit, Input } from '@angular/core';
// import { BasketOrder } from 'src/app/data/basket-data/basket-order';
// import { OrderType } from '../order-type.enum';
// import { orderListComponent } from '../orderList.component';
// import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';

// @Component({
//   selector: 'order-header-basket',
//   templateUrl: './header-basket.component.html',
//   styleUrls: ['./header-basket.component.scss'],
// })
// export class HeaderBasketComponent extends orderListComponent implements OnInit {
//   @Input() orderType : OrderType;
//   @Input() orderIndex : number;

//   constructor(
//     pageData : PageDataStorageService
//   ) {
//     super(pageData);
//    }

//   ngOnInit() {}

//   get order() : BasketOrder{
//     return this.orderList[this.orderIndex] as BasketOrder;
//   }

//   get checkValue(){
//     return this.order.checkValue
//   }

//   set checkValue(checked : boolean){
//     this.order.value = checked;
//   }

//   get indeterminated(){
//     return this.order.indeterminate;
//   }

//   get foodtruckInfo(){
//     return this.order.foodtruckinfo;
//   }
//   get price(){
//     return this.orderPrice(this.orderIndex);
//   }

//   checkValueToggle(){
//     this.order.toggle();
//   }

// }
