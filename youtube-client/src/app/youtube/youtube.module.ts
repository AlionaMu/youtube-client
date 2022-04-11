import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { MainPageComponent } from './page/main-page/main-page.component';
import { DetailedInfoPageComponent } from './page/detailed-info-page/detailed-info-page.component';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';

@NgModule({
  declarations: [

  
    MainPageComponent,
        DetailedInfoPageComponent,
        NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule
  ]
})
export class YoutubeModule { }
