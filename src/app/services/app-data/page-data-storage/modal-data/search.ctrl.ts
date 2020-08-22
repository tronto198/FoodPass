
import { addressSearchResult, keywordSearchResult, addressSearch, keywordSearch } from 'src/app/services/map/map.searcher';
import { CommunicationService } from 'src/app/services/communication/communication.service';

export class SearchDataCtrl {
    inputData : String;
    addressSearchResults : addressSearchResult[];
    keywordSearchResults : keywordSearchResult[];
    currentSearched : String;
    
    constructor(dataCtrl : CommunicationService) {
    
    }

    search(){
      addressSearch(this.inputData, (result => this.addressSearchResults = result));
      keywordSearch(this.inputData, (result => this.keywordSearchResults = result));
    }
    //하나 선택하면 지도를 그 화면으로 이동, 주변의 푸드트럭 리스트 표시
    //만약 찾은게 푸드트럭들이라면 그것들로 화면구성, 이때 하나 터치하면 그 정보 표시
}