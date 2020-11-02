import { Component, OnInit } from '@angular/core';
import {ConfirmDataCtrl} from "../../../services/data-ctrl/confirm.data.ctrl";
import {OrderConformData} from "../../../data/order-confirm";

@Component({
  selector: 'app-cooking-order-list',
  templateUrl: './cooking-order-list.component.html',
  styleUrls: ['./cooking-order-list.component.scss'],
})
export class CookingOrderListComponent implements OnInit {

  constructor(
      private confirmData:ConfirmDataCtrl
  ) { }

  ngOnInit() {
    this.confirm()
  }

  get orderList() : OrderConformData[] {
    return this.confirmData.datas;
  }

  confirm(){
    console.log(`confirm 함수 실행함`)
    this.confirmData.cookingItem(1001).then(val=>{
      console.log(`요리해야할 목록을 성공적으로 가져왔습니다. val:`,val)
      this.confirmData.datas = val
      console.log("푸시함")
    }).catch(error=>{
      console.log(error);
      console.log(`요리해야할 목록이 보이지 않습니다.`)
    })
  }
}
