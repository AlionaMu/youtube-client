import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() public submitInput: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public submitForm(action: boolean): void {
    console.log('jjj')
    this.submitInput.emit(action);
  }
}
