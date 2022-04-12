import { SearchItem } from '../../core/models/search-item.model';
import { youtubeResponse } from '../../shared/mocks/response';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  userInput: string;
  dateSort: boolean;
  viewSort: boolean;

}
