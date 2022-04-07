import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() public submitInput: EventEmitter<boolean> = new EventEmitter<boolean>();

  title = 'search';

  public submitForm(action: boolean): void {
    this.submitInput.emit(action);
  }
}
