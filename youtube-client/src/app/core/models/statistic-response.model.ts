export interface StatisticResponse {
  etag: string;
  items: StatisticRensponseItem;
  kind: string;
  pageInfo: PageInfoResponse;
}

export interface StatisticRensponseItem {
  etag: string;
  id: string;
  kind: string;
  statistics: StatisticItem;
}

export interface PageInfoResponse {
  resultsPerPage: number;
  totalResults: number;
}

export interface StatisticItem {
  commentCount: string;
  dislikeCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
}
