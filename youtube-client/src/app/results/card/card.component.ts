import { Component, OnInit, Input } from '@angular/core';
import { ResultItem } from '../models/result-item.model';
import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class Card implements OnInit {
  // @Input() video?: ResultItem | undefined;
  @Input() video: SearchItem | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}