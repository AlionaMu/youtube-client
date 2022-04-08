import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse } from '../../models/search-response.model';

@Injectable({providedIn: 'root',})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchRequest() {
    const url = 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/response.json';
    const res = this.http.get<SearchResponse>(url);
    return res;
  }
}
