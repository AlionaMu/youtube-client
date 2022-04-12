import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public hasResponse: boolean = false;
  public isSortingOpen: boolean = false;

  public openResults() {
    this.hasResponse = true;
    console.log('true in global', this.hasResponse)
  }

  public toggleSorting() {
    this.isSortingOpen ? this.isSortingOpen = false : this.isSortingOpen = true;
    console.log(this.isSortingOpen, 'sortingOpen')
   /* if (this.isSortingOpen) {
      this.showSorting(true);
    } else {
      this.showSorting(false);
    }
  }

  public showSorting() {
 */
  }

  public showResults() {
    this.hasResponse = true
  }
}
