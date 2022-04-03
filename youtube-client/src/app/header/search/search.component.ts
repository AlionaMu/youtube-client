import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../../services/search-service';
import { SearchItem } from '../../models/search-item.model';
import { youtubeResponse } from './../../mocks/response';

const videos: Array<SearchItem> = youtubeResponse.items;

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchRequest = new EventEmitter<string>();

  searchItems?: SearchItem[];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  searchClick(): void {
    const res = videos.map((item) => ({
        id: item.id,
        imageUrl: item.snippet.thumbnails.medium.url,
        title: item.snippet.title,
        viewCount: item.statistics.viewCount,
        likeCount: item.statistics.likeCount,
        dislikeCount: item.statistics.dislikeCount,
        favoriteCount: item.statistics.favoriteCount,
        commentCount: item.statistics.commentCount,
        publishedDate: item.snippet.publishedAt,
      }));

  console.log(res)
  }
}
