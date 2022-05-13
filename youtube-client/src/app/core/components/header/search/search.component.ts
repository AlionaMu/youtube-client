import { Component, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { SearchService } from 'src/app/core/services/search-service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @ViewChild('searchInput') public input: ElementRef;
  public input$: Observable<InputEvent>;

  constructor(public searchService: SearchService ) {}

  searchWord() {
    this.input$ = fromEvent<InputEvent>(this.input.nativeElement, 'input');
    if (this.input.nativeElement.value.length > 2 ) {
      this.searchService.headerInput = this.input.nativeElement.value;
      this.searchService.getData();
    }
  }
}
