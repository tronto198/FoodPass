import { Component, OnInit } from '@angular/core';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { MapService } from 'src/app/services/map/map.service';
import { PageControllerService } from 'src/app/services/page-controller.service';
import { SearchType } from 'src/app/services/map/search-item.enum';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(private search: SearchService) { }

  ngOnInit() {
  }

  get addressResults(){
    return this.search.addressSearchResults;
  }

  get keywordResults(){
    return this.search.keywordSearchResults;
  }

  get inputData(){
    return this.search.inputData;
  }
  set inputData(val){
    this.search.inputData = val;
  }

  get currentSearched(){
    return this.search.currentSearched;
  }

  get addressType(){
    return SearchType.Address;
  }
  get keywordType(){
    return SearchType.Keyword;
  }

  startSearch(){
    this.search.search()
  }

  select(event){
    // this.mapCtrl.mapPosition = event;

    console.log(event);
    

    //푸드트럭 검색
    // this.pageCtrl.routingHome();
  }

  selectAddress(index){

  }

  selectKeyword(index){

  }
}
