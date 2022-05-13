import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/services/search-service';
import { SearchItem } from 'src/app/core/models/search-item.model';
import { GlobalService } from 'src/app/core/services/global-service';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input() isButtonSearchOn?: boolean;
  @Input() userInput: string;
  @Input() dateSort: boolean;
  @Input() viewSort: boolean;
  public videos: any;
  public video: any
  public items: SearchItem[];

  constructor(public searchService: SearchService, public globalService: GlobalService) { }

  public ngOnInit(): void {
    this.searchService.data$.pipe(
      debounceTime(500)
      ).subscribe((data: any) => {
      this.videos = data;
    })
  }
}
