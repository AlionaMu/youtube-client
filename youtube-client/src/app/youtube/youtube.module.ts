import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { MainPageComponent } from './page/main-page/main-page.component';
import { DetailedInfoPageComponent } from './page/detailed-info-page/detailed-info-page.component';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';

import { ResultsComponent } from './components/results/results.component';
import { CardComponent } from './components/results/card/card.component';
import { BorderDirective } from './directives/border-color.directive';
import { WordSortPipe } from './pipes/input-sort.pipe';
import { DateSortPipe } from './pipes/date-sort.pipe';
import { ViewSortPipe } from './pipes/view-sort.pipe';


@NgModule({
  declarations: [
    MainPageComponent,
    DetailedInfoPageComponent,
    NotFoundPageComponent,

    ResultsComponent,
    CardComponent,
    BorderDirective,
    WordSortPipe,
    DateSortPipe,
    ViewSortPipe,

  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule
  ]
})
export class YoutubeModule { }