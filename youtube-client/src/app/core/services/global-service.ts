import { Injectable } from '@angular/core';
import { SearchItem } from '../models/search-item.model';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public isResultsOpen = false;
  public isSortingOpen: boolean = false;

  public userInput: string;
  public dateSort: boolean;
  public viewSort: boolean;
  public videos: any;
  public items: SearchItem[];

  public openResults() {
    this.isResultsOpen = true;
  }

  public toggleSorting() {
    this.isSortingOpen ? this.isSortingOpen = false : this.isSortingOpen = true;
  }
}
