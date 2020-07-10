import { Component, OnInit } from '@angular/core';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { MapService } from 'src/app/services/map/map.service';
import { PageControllerService } from 'src/app/services/app-data/page-controller/page-controller.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(private pageData: PageDataStorageService,
    private mapCtrl: MapService,
    private pageCtrl: PageControllerService) { }

  ngOnInit() {
  }

  get ctrl(){
    return this.pageData.modal.searchDataCtrl;
  }

  search(){
    this.ctrl.search();
  }

  get addressResults(){
    return this.ctrl.addressSearchResults;
  }

  get keywordResults(){
    return this.ctrl.keywordSearchResults;
  }

  get inputData(){
    return this.ctrl.inputData;
  }
  set inputData(val){
    this.ctrl.inputData = val;
  }

  get currentSearched(){
    return this.ctrl.currentSearched;
  }

  select(event){
    this.mapCtrl.mapPosition = event;
    //푸드트럭 검색
    this.pageCtrl.routingHome();
  }
}
