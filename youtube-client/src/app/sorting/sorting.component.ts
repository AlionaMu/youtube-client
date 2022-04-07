import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent {
  @Output() public textValue: EventEmitter<string> = new EventEmitter();

  constructor() { }

  getValue(userInput: string) {
    this.textValue.emit(userInput);
  }
}
