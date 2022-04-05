import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../../services/search-service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() buttonClick = new EventEmitter();
 // @Output() searchRequest = new EventEmitter<string>();

  constructor(private searchService: SearchService) { }

  searchClick(search: boolean): void {
    this.buttonClick.emit(search);
  }
}
