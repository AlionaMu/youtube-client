import { SearchItem } from '../../core/models/search-item.model';
import { youtubeResponse } from '../../shared/mocks/response';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  public videos: Array<SearchItem> = youtubeResponse.items;
  userInput: string;
  dateSort: boolean;
  viewSort: boolean;

  videoId: string;
  video: SearchItem;

  public findVideo(): void {
    for (let i: number = 0; i < this.videos.length; i++) {
      if (this.videos[i].id === this.videoId) {
        this.video = this.videos[i];
      }
    }
  }
}
