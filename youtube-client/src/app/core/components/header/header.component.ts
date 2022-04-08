import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {
  @Output() showSorting: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() openResults: EventEmitter<boolean> = new EventEmitter<boolean>();

  public isSortingOpen: boolean = false;

  submitForm(value: boolean) {
    this.openResults.emit(value);
  }

  toggleSorting(): void {
    this.isSortingOpen ? this.isSortingOpen = false : this.isSortingOpen = true;
    if (this.isSortingOpen) {
      this.showSorting.emit(true);
    } else {
      this.showSorting.emit(false);
    }
  }
}
