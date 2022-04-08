import { Pipe, PipeTransform } from "@angular/core";
import { SearchItem } from '../../models/search-item.model';

@Pipe({
  name: 'dateSort'
})
export class DateSortPipe implements PipeTransform {
  public transform(cards: SearchItem[], dateSort: boolean): SearchItem[] {
    if (dateSort === true) {
      return cards.sort((a, b) =>
      new Date(b.snippet.publishedAt).getTime() -
      new Date(a.snippet.publishedAt).getTime());
    } else if (dateSort === false) {
      return cards.sort((a, b) =>
      new Date(a.snippet.publishedAt).getTime() -
      new Date(b.snippet.publishedAt).getTime());
    } else {
      return cards;
    }
  }
}
