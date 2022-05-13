import { Component, Input } from '@angular/core';
import { YoutubeService } from 'src/app/youtube/services/youtube-service';
import { SearchItem } from '../../../../core/models/search-item.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public video: SearchItem | undefined;

  constructor(public youtubeService: YoutubeService, public router: Router ) { }

  public setId(id: string): void {
    this.youtubeService.videoId = id;
    this.router.navigate(['/video', id]);
  }
}
