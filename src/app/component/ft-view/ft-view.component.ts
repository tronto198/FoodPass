import { Component, OnInit, Input } from '@angular/core';
import { FoodtruckDataCtrl } from 'src/app/services/data-ctrl/foodtruck.data.ctrl';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { TagDistComponent } from '../tag-dist/tag-dist.component';
import { PageControllerService } from 'src/app/services/page-controller.service';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'comp-ft-view',
  templateUrl: './ft-view.component.html',
  styleUrls: ['./ft-view.component.scss'],
})

export class FtViewComponent implements OnInit {
  @Input() foodtruckId: number;
  @Input() index:number;
  @Input() routeFoodtruck: boolean = true;

  constructor(private dataCtrl: FoodtruckDataCtrl,
    private pageCtrl: PageControllerService,
    private modalCtrl: ModalController,
    ) { }
  //foodtruck의 id가 있으면 foodtruckDataCtrl 을 다룰 수 있다.
  ngOnInit() {
  
  }

  get foodtruckData(): FoodtruckData {
    return this.dataCtrl.findFoodtruckById(this.foodtruckId)
  }

  get lat(): number | undefined {
    return this.foodtruckData.location ? this.foodtruckData.location.lat : undefined;
  }

  get lng(): number | undefined {
    return this.foodtruckData.location ? this.foodtruckData.location.lng : undefined;
  }

  get name():string{
    return this.foodtruckData.name
  }
  get introduction():string{
    return this.foodtruckData.introduction
  }
  get notice():string{
    return this.foodtruckData.notice
  }
  add(num1:number, num2:number):number{
    return (+num1) + (+num2)
  }
  get pot():string{
    var i:number='A'.charCodeAt(0)
    var char=String.fromCharCode(this.add(i,this.index))
   
    return char;
  }
 

  async route(){
    if(this.routeFoodtruck){
      this.pageCtrl.presentFoodtruck(this.foodtruckId);
      this.modalCtrl.getTop().then(r => {
        if(r != undefined){
          this.modalCtrl.dismiss()
        }
      })
    }
  }


}
