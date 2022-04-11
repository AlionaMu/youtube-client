import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from '../../../core/models/search-item.model';
import { youtubeResponse } from '../../../shared/mocks/response';

const videos: Array<SearchItem> = youtubeResponse.items;

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
  videos: SearchItem[] = [];

  ngOnInit(): void {
    this.videos = videos;
  }
}
