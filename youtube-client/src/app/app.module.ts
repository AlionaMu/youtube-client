import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { YoutubeModule } from './youtube/youtube.module';
import { CoreModule } from './core/core.module';

import { ResultsComponent } from '../app/youtube/components/results/results.component';
import { CardComponent } from '../app/youtube/components/results/card/card.component';
import { BorderDirective } from '../app/youtube/directives/border-color.directive';
import { WordSortPipe } from '../app/youtube/pipes/input-sort.pipe';
import { DateSortPipe } from '../app/youtube/pipes/date-sort.pipe';
import { ViewSortPipe } from '../app/youtube/pipes/view-sort.pipe';

import { SortingComponent } from '../app/core/components/sorting/sorting.component';
import { SortDateComponent } from '../app/core/components/sorting/sort-date/sort-date.component';
import { SortViewComponent } from '../app/core/components/sorting/sort-view/sort-view.component';
import { SortInputComponent } from '../app/core/components/sorting/sort-input/sort-input.component';




@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    CardComponent,
    BorderDirective,
    WordSortPipe,
    DateSortPipe,
    ViewSortPipe,
    SortingComponent,
    SortDateComponent,
    SortViewComponent,
    SortInputComponent,
  ],
  imports: [
   // YoutubeModule,
    CoreModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
