import { Injectable } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { youtubeResponse } from '../../shared/mocks/response';

const videos: Array<SearchItem> = youtubeResponse.items;


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public hasResponse: boolean = false;
  public isSortingOpen: boolean = false;

  public userInput: string;
  public dateSort: boolean;
  public viewSort: boolean;

  public videos: SearchItem[] = youtubeResponse.items;

  public openResults() {
    this.hasResponse = true;
    console.log('true in global', this.hasResponse)
  }

  public toggleSorting() {
    this.isSortingOpen ? this.isSortingOpen = false : this.isSortingOpen = true;
  }
}
