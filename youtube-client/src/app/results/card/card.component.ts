import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class Card implements OnInit {
  @Input() video: SearchItem | undefined;

 // public appBorderColor: string = 'violet';

  constructor() { }

  ngOnInit(): void {
  }

}