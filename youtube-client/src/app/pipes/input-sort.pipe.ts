import { Pipe, PipeTransform } from "@angular/core";
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'wordSort'
})
export class WordSortPipe implements PipeTransform {
  public transform(cards: SearchItem[], value: string): SearchItem[] {
    if (value) {
      return cards.filter((card) => card.snippet.title.toLowerCase()
      .indexOf(value.toLowerCase()) !== -1);
    }
    return cards;
  }
}
