import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class Header implements OnInit {
    @Output() searchRequestUrl = new EventEmitter<string>();

    ngOnInit(): void {
    }

    searchRequest(url: string) {
        this.searchRequestUrl.emit(url);
      }
}