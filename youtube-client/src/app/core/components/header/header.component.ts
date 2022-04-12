import { Component, EventEmitter, Output } from "@angular/core";
import { GlobalService } from "../../services/global-service";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {
  //@Output() showSorting: EventEmitter<boolean> = new EventEmitter<boolean>();
  //@Output() openResults: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _globalService: GlobalService) { }

  submitForm(value: boolean) {
    //this.openResults.emit(value);
    this._globalService.openResults()
  }

  toggleSorting(): void {
    this._globalService.toggleSorting();
  }

  /*toggleSorting(): void {
    this.isSortingOpen ? this.isSortingOpen = false : this.isSortingOpen = true;
    if (this.isSortingOpen) {
      this.showSorting.emit(true);
    } else {
      this.showSorting.emit(false);
    }
    console.log('check toggle')
  }*/
}
