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
    this.video = this.videos[2];
    console.log(this.video, 'this.video')
  }

}
