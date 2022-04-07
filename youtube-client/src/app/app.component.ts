import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtube-client';
  public hasResponse: boolean = false;
  public isSortingOpen: boolean = false;
  public searchText: string;
  public userInput: string;


  public openResults(): void {
    this.hasResponse = true;
  }

  public showSorting(isOpen: boolean): void {
    isOpen ? this.isSortingOpen = true : this.isSortingOpen = false;
  }

  public textSearch(...args: string[]): void {
    this.searchText = args[0];
  }

  textValue(userInput: string) {
    this.userInput = userInput;
  }
}
