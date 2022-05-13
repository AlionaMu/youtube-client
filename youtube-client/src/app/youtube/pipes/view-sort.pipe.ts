import { Pipe, PipeTransform } from "@angular/core";
import { SearchItem } from '../../core/models/search-item.model';

@Pipe({
  name: 'viewSort'
})
export class ViewSortPipe implements PipeTransform {
  public transform(cards: SearchItem[], asc: boolean): SearchItem[] {

    if (asc === undefined) {
      return cards;
    } else {
    return cards?.sort((a: SearchItem, b: SearchItem) => asc
      ? parseInt(b.statistics.viewCount) - parseInt(a.statistics.viewCount)
      : parseInt(a.statistics.viewCount) - parseInt(b.statistics.viewCount))
    }
  }
}
