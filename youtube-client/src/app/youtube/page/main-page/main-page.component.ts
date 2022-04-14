import { Component } from '@angular/core';
import { GlobalService } from 'src/app/core/services/global-service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  constructor(public globalService: GlobalService) { }
}
