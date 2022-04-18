import { Component, Input, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube-service';
import { GlobalService } from 'src/app/core/services/global-service';

//const videos: Array<SearchItem> = youtubeResponse.items;

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
  videos: any;
  //videos: SearchItem[] = [];

  constructor(public youtubeService: YoutubeService, public globalService: GlobalService) { }

  public ngOnInit(): void {
    this.videos = this.youtubeService.videos;
  }
}
