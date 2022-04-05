import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {

    @Output() openSorting: EventEmitter<boolean> = new EventEmitter();

    public isSorting: boolean = false;

    showSorting(): void {
        this.isSorting ? this.isSorting = false : this.isSorting = true;
        if (this.isSorting) {
          this.openSorting.emit(true);
        } else {
          this.openSorting.emit(false);
        }
    }
}
