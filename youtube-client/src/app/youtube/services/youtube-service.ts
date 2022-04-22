import { SearchItem } from '../../core/models/search-item.model';
import { Injectable } from '@angular/core';
import { SearchService } from 'src/app/core/services/search-service';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  //public videos: Array<SearchItem> = youtubeResponse.items;
  public items: SearchItem[];
  public userInput: string;
  public dateSort: boolean;
  public viewSort: boolean;
  public videoId: string;
  public video: SearchItem;
  public videos: any;


  constructor( public searchService: SearchService ) {}

  public findVideo(): void {
   this.videos = this.searchService.data$.subscribe((data: SearchItem[] ) => {
     // this.items = data;
     console.log(data)
    });
    console.log(this.videos)
    for (let i: number = 0; i < this.videos.length; i++) {
      console.log( this.videoId, this.videos[i].id.videoId)
      if (this.videos[i].id.videoId === this.videoId) {

        this.video = this.videos[i];
        console.log(this.video)
      }
    }
  }
}
