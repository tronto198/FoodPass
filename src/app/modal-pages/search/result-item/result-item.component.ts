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

  constructor(private search: SearchService) { }

  ngOnInit() {}

  get item() : SearchResult {
    let item = null
    if(this.type == SearchType.Address){
      item = this.search.addressSearchResults[this.index];
    }
    else if (this.type == SearchType.Keyword){
      item = this.search.keywordSearchResults[this.index];
    }
    return item;
  }
}
