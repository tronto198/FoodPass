import { Component, OnInit, Input } from '@angular/core';
import { UserData } from 'src/app/data/user';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.scss'],
})
export class UserImgComponent implements OnInit {

 
  @Input() userId:number;
 
     constructor(/*private dataCtrl:UserDataCtrl*/) { }

    get userInfo() : UserData{
      return{
        id:0,
        userName:"userName",
        
      }
      //return this.dataCtrl.findMenuById(this.userId)
    }
    get imgSrc():string{
      return this.userInfo.imgsrc
    }

  ngOnInit() {}

}
