import { Component, OnInit, Input } from '@angular/core';
import { UserData } from 'src/app/data/user';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss'],
})
export class UserNameComponent implements OnInit {

  @Input() userId:number;
 
    constructor(/*private dataCtrl:UserDataCtrl*/) { }

    get userInfo() : UserData{
      return{
        id:0,
        userName:"userName",
        
      }
      //return this.dataCtrl.findMenuById(this.userId)
    }
    get name():string{
      return this.userInfo.userName
    }

  ngOnInit() {}

}
