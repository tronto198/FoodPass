import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocationDataCtrl } from 'src/app/services/data-ctrl/location.data.ctrl';
import { SearchResult } from 'src/app/services/map/map.searcher';
import { MapService } from 'src/app/services/map/map.service';
import { SearchType } from 'src/app/services/map/search-item.enum';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'modal-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(
    private search: SearchService,
    private modalCtrl: ModalController,
    private mapService: MapService,
    private locationCtrl: LocationDataCtrl
    ) { }

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

  dismiss(){
    this.modalCtrl.dismiss()
  }

  select(result : SearchResult){
    this.mapService.mapPosition = result.location;
    this.locationCtrl.searchLocation = result.location;
    this.search.inputData = result.name;
    this.modalCtrl.dismiss()

    //푸드트럭 검색
    // this.pageCtrl.routingHome();
  }

  selectAddress(index){
    this.select(this.addressResults[index])
  }

  selectKeyword(index){
    this.select(this.keywordResults[index])
  }
}
