import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../services/search-service';
import { SearchItem } from '../models/search-item.model';
import { youtubeResponse } from './../mocks/response';

const videos: Array<SearchItem> = youtubeResponse.items;

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input() isButtonSearchOn?: boolean;
  videos: SearchItem[] = [];
  
  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.videos = videos;
  /*    videos.map((item) => ({
      id: item.id,
      imageUrl: item.snippet.thumbnails.medium.url,
      title: item.snippet.title,
      viewCount: item.statistics.viewCount,
      likeCount: item.statistics.likeCount,
      dislikeCount: item.statistics.dislikeCount,
      favoriteCount: item.statistics.favoriteCount,
      commentCount: item.statistics.commentCount,
      publishedDate: item.snippet.publishedAt,
    }));*/
   // console.log(res)
  }
}