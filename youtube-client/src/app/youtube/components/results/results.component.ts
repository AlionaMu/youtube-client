import { Component, Input } from '@angular/core';
import { GlobalService } from 'src/app/core/services/global-service';

//const videos: Array<SearchItem> = youtubeResponse.items;

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input() isButtonSearchOn?: boolean;
  @Input() userInput: string;
  @Input() dateSort: boolean;
  @Input() viewSort: boolean;
  //videos: SearchItem[] = [];

  constructor(public globalService: GlobalService) { }
}
