import { SearchItem } from './search-item.model';
import { PageInfoResponse } from './statistic-response.model';


export interface SearchResponse {
  etag: string;
  items: SearchItem[];
  kind: string;
  nextPageToken?: string;
  pageInfo: PageInfoResponse;
  regionCode?: string;
}
