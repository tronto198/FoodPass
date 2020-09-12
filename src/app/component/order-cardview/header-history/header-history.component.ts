// import { Component, OnInit, Input } from '@angular/core';
// import { OrderType } from '../order-type.enum';
// import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
// import { orderListComponent } from '../orderList.component';

// @Component({
//   selector: 'order-header-history',
//   templateUrl: './header-history.component.html',
//   styleUrls: ['./header-history.component.scss'],
// })
// export class HeaderHistoryComponent extends orderListComponent implements OnInit {
//   @Input() orderType : OrderType;
//   @Input() orderIndex : number;

//   constructor(
//     pageData : PageDataStorageService
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


