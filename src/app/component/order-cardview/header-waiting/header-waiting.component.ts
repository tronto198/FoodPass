// import { Component, OnInit, Input } from '@angular/core';
// import { orderListComponent } from '../orderList.component';
// import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
// import { OrderType } from '../order-type.enum';

// @Component({
//   selector: 'order-header-waiting',
//   templateUrl: './header-waiting.component.html',
//   styleUrls: ['./header-waiting.component.scss'],
// })
// export class HeaderWaitingComponent extends orderListComponent implements OnInit {
//   @Input() orderType : OrderType;
//   @Input() orderIndex : number;

//   constructor(
//     pageData : PageDataStorageService,
//   ) {
//     super(pageData);
//    }

//   ngOnInit() {}

//   get order(){
//     return this.orderList[this.orderIndex];
//   }

//   get foodtruckInfo(){
//     return this.order.foodtruckinfo;
//   }

//   get orderedMenuList(){
//     return this.order.orderedMenu;
//   }

//   get price(){
//     return this.orderPrice(this.orderIndex);
//   }
// }
