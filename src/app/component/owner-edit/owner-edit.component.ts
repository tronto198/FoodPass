import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';

@Component({
  selector: 'component-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.scss'],
})
export class OwnerEditComponent implements OnInit {

  @Input() valueModel : string;
  @Output() valueModelChange = new EventEmitter<string>();

  constructor(
    private config : SharedDataService
  ) { }

  ngOnInit() {
  }

  get isOwner() : boolean {
    return this.config.foodtruckOwner;
  }

  get value(){
    return this.valueModel;
  }

  set value(str : string){
    this.valueModel = str;
    this.valueModelChange.emit(this.valueModel);
  }
}
