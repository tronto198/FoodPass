import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocationData } from 'src/app/data/location';
import { SearchType } from '../../../services/map/search-item.enum';
import { SearchResult } from 'src/app/services/map/map.searcher';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'search-resultItem',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent implements OnInit {
  @Input() type: SearchType;
  @Input() index: number;
  @Output() selected = new EventEmitter<SearchResult>();

  constructor(private search: SearchService) { }

  ngOnInit() {}

  get item(){
    switch(this.type){
      case SearchType.Address:
        return this.search.addressSearchResults[this.index];

      case SearchType.Keyword:
        return this.search.keywordSearchResults[this.index];

    }
  }
}
