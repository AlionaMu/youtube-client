import { Component } from '@angular/core';
import { GlobalService } from './core/services/global-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtube-client';
  //public hasResponse: boolean = false;
  //public isSortingOpen: boolean = false;
  public searchText: string;
  public userInput: string;
  public dateSort: boolean;
  public viewSort: boolean;

  constructor(public globalService: GlobalService) { }

  public dateSorting(...args: boolean[]) {
    this.dateSort = args[0];
  }

  public viewSorting(...args: boolean[]) {
    this.viewSort = args[0];
  }

  /*public openResults(): void {
    this.hasResponse = true;
  }

  public showSorting(isOpen: boolean): void {
    isOpen ? this.isSortingOpen = true : this.isSortingOpen = false;
  }*/

  public textSearch(...args: string[]): void {
    this.searchText = args[0];
  }

  textValue(userInput: string) {
    this.userInput = userInput;
  }
}
