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

  constructor(public globalService: GlobalService) { }

  submitForm(value: boolean) {
    //this.openResults.emit(value);
    this.globalService.openResults()
  }

  toggleSorting(): void {
    this.globalService.toggleSorting();
  }
}
