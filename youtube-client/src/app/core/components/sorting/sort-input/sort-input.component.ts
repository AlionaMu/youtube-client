import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-sort-input',
  templateUrl: './sort-input.component.html',
  styleUrls: ['./sort-input.component.scss']
})
export class SortInputComponent {
  @Output() public getValue: EventEmitter<string> = new EventEmitter<string>();
  public value: string = '';

  constructor() { }

  getInputValue(event: any) {
    this.value = event.target.value;
  }

  searchSubmit() {
    this.getValue.emit(this.value);
  }
}

