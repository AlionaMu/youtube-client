import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

import { SearchItem } from '../models/search-item.model';
import { SearchResponse } from '../models/search-response.model';
import { StatisticRensponseItem, StatisticResponse  } from '../models/statistic-response.model';
import { GlobalService } from './global-service';


@Injectable({providedIn: 'root',})
export class SearchService {
  public data: any; //SearchItem[];
  public items: SearchItem[];
  public headerInput: string;
  public data$: BehaviorSubject<SearchItem[]> = new BehaviorSubject(null);
  private apiKey: string ='AIzaSyCAZUF47LG755Pfj-1limSEQOAZFGKgQkw';

  constructor(private http: HttpClient, public globalService: GlobalService) { }

  public getData() {
    this.http.get<SearchResponse>(`https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&type=video&part=snippet&maxResults=15&q=${this.headerInput}`)
    .pipe(
      mergeMap<SearchResponse, Observable<Object>>((data: SearchResponse): Observable<Object> => {
        this.data = data;
        let items: SearchItem[] = [...data.items];
        let idItems: string[] = items.map((item: SearchItem) => {
          return item.id.videoId;
        });
        let idItemsStr: string = idItems.join(',');
        return this.getStatistic(idItemsStr);
      })).subscribe((data: any) => {
       let statisticsItems: StatisticRensponseItem[] = data.items;
        let oldData: SearchItem[] = this.data.items;
        let newData: SearchItem[] = oldData.map(item => {
          let newItem: SearchItem = item;
          let idItem: string = item.id.videoId;
         newItem.statistics = statisticsItems.filter(statisticItem => idItem === statisticItem.id)[0].statistics;
          return newItem;
        });
        this.data$.next(newData);
      });
  }

    public getStatistic(id: string): Observable<Object> {
      return this.http.get(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${this.apiKey}&part=statistics`);
  }
}
