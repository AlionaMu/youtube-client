import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube-service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(public youtubeService: YoutubeService) { }
    ngOnInit(): void {
      console.log(this.youtubeService)
    }

}
