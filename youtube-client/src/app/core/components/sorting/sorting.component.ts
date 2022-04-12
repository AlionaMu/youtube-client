import { Component, EventEmitter, Output } from '@angular/core';
import { GlobalService } from '../../services/global-service';


@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent {
  @Output() public textValue: EventEmitter<string> = new EventEmitter();
  //@Output() public dateSorting: EventEmitter<boolean> = new EventEmitter();
 // @Output() public viewSorting: EventEmitter<boolean> = new EventEmitter();

  public dateCounter: number = 0;
  public viewCounter: number = 0;

  constructor(public globalService: GlobalService) { }

  public getValue(userInput: string) {
    this.textValue.emit(userInput);
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
