import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../../services/search-service';



@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() buttonClick = new EventEmitter();
 // @Output() searchRequest = new EventEmitter<string>();

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  searchClick(search: boolean): void {
    this.buttonClick.emit(search);
  }
}
