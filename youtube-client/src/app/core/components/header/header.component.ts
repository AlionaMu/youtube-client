import { Component } from "@angular/core";
import { GlobalService } from "../../services/global-service";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {

  constructor(public globalService: GlobalService) { }

  toggleSorting(): void {
    this.globalService.toggleSorting();
  }

  openResultsPanel(): void {
    this.globalService.openResults();
  }
}
