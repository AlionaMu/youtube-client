import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube-service';
import { SearchItem } from 'src/app/core/models/search-item.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SearchService } from 'src/app/core/services/search-service';


@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss']
})
export class DetailedInfoComponent implements OnInit {
  public video: SearchItem;

  constructor(public youtubeService: YoutubeService, public route: ActivatedRoute, public searchService: SearchService, private location: Location) { }

  public ngOnInit(): void {
    this.youtubeService.findVideo();
    this.video = this.youtubeService.video
  }

  public goToPreviousPage(): void {
    this.location.back();
  }
}
