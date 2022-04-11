import { Pipe, PipeTransform } from "@angular/core";
import { SearchItem } from '../../core/models/search-item.model';

@Pipe({
  name: 'viewSort'
})
export class ViewSortPipe implements PipeTransform {
  public transform(cards: SearchItem[], viewSort: boolean): SearchItem[] {
    switch (viewSort) {
      case undefined:
        return cards;
      case true:
        return cards.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
      case false:
        return cards.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount));
    }
  }
}
