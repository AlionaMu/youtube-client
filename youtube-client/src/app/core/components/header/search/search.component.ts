import { Component, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GlobalService } from 'src/app/core/services/global-service';
import { SearchService } from 'src/app/core/services/search-service';
import { YoutubeService } from 'src/app/youtube/services/youtube-service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @ViewChild('searchInput') public input: ElementRef;
  public input$: Observable<InputEvent>;

  constructor(public searchService: SearchService, public youtubeService: YoutubeService, public globalService: GlobalService) {}

  searchWord() {
    this.input$ = fromEvent<InputEvent>(this.input.nativeElement, 'input');
    this.input$.pipe(
      debounceTime(500),
      distinctUntilChanged(), // compare to the last value
    ).subscribe(() => {
      if (this.input.nativeElement.value.length > 2 ) {
       this.searchService.headerInput = this.input.nativeElement.value;
       console.log( this.searchService.headerInput)
       this.searchService.getData();
      }
    });
  }
}
