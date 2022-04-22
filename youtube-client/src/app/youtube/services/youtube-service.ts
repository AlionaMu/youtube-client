import { SearchItem } from '../../core/models/search-item.model';
import { Injectable } from '@angular/core';
import { SearchService } from 'src/app/core/services/search-service';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  public items: SearchItem[];
  public userInput: string;
  public dateSort: boolean;
  public viewSort: boolean;
  public videoId: string;
  public video: SearchItem;
  public videos: any;

  constructor( public searchService: SearchService ) {}

  public findVideo(): void {
    this.searchService.data$.subscribe((data: SearchItem[] ) => {
      this.videos = data;
    });
    for (let i: number = 0; i < this.videos.length; i++) {
      if (this.videos[i].id.videoId === this.videoId) {
        this.video = this.videos[i];
      }
    }
  }
}
