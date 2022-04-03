import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SearchService } from '../services/search-service';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnChanges {
  @Input() searchRequestWord?: string;

  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (!this.searchRequestWord) return;

  }
}