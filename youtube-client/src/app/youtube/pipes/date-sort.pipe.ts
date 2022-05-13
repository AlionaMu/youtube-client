import { Pipe, PipeTransform } from "@angular/core";
import { SearchItem } from '../../core/models/search-item.model';

@Pipe({
  name: 'dateSort'
})
export class DateSortPipe implements PipeTransform {
  public transform(cards: SearchItem[], asc: boolean): SearchItem[] {

    if (asc === undefined) {
      return cards;
    } else {
      return  cards.sort((a: SearchItem, b: SearchItem) => asc ?
        new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime() :
        new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime())
    }
  }
}
