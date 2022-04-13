import { Component } from '@angular/core';
import { GlobalService } from '../../services/global-service';


@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent {
  public dateCounter: number = 0;
  public viewCounter: number = 0;

  constructor(public globalService: GlobalService) { }

  public getValue(userInput: string) {
    this.globalService.userInput = userInput;
  }

  public dateSort($event: MouseEvent) {
    $event.preventDefault();
    this.dateCounter++;
    this.viewCounter = 0;
    if (this.dateCounter % 2 !== 0) {
      this.globalService.dateSort = true;
    } else {
      this.globalService.dateSort = false;
    }
  }

  public viewSort($event: MouseEvent) {
    $event.preventDefault();
    this.viewCounter++;
    this.dateCounter = 0;
    if (this.viewCounter % 2 !== 0) {
      this.globalService.viewSort = true;
    } else {
      this.globalService.viewSort = false;
    }
  }
}
