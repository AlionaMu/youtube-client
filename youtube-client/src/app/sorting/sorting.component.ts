import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent {
  @Output() public textValue: EventEmitter<string> = new EventEmitter();
  @Output() public dateSorting: EventEmitter<boolean> = new EventEmitter();

  public dateCounter: number = 0;

  constructor() { }

  public getValue(userInput: string) {
    this.textValue.emit(userInput);
  }

  public dateSort($event: MouseEvent) {
    $event.preventDefault();
    this.dateCounter++;
    if (this.dateCounter % 2 !== 0) {
      this.dateSorting.emit(true);
    } else {
      this.dateSorting.emit(false);
    }
  }
}
