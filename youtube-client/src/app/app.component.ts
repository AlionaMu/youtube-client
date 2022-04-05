import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtube-client';
  public hasResponse: boolean = false;
  public isSortingOpen: boolean = false;

  public openResults(): void {
    this.hasResponse = true;
  }

  public showSorting(isOpen: boolean): void {
    console.log(isOpen, 'open')
    isOpen ? this.isSortingOpen = true : this.isSortingOpen = false;
  }
}
