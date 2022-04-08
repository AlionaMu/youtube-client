import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { ResultsComponent } from './youtube/components/results/results.component';
import { CardComponent } from './youtube/components/results/card/card.component';
import { AuthComponent } from './core/components/header/auth/auth.component';
import { SearchComponent } from './core/components/header/search/search.component';
import { SortingComponent } from './core/components/sorting/sorting.component';
import { SettingsButtonComponent } from './core/components/header/settings-button/settings-button.component';
import { BorderDirective } from './youtube/directives/border-color.directive';
import { LogoComponent } from './core/components/header/logo/logo.component';
import { SortDateComponent } from './core/components/sorting/sort-date/sort-date.component';
import { SortViewComponent } from './core/components/sorting/sort-view/sort-view.component';
import { SortInputComponent } from './core/components/sorting/sort-input/sort-input.component';
import { WordSortPipe } from './core/pipes/input-sort.pipe';
import { DateSortPipe } from './core/pipes/date-sort.pipe';
import { ViewSortPipe } from './core/pipes/view-sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    SearchComponent,
    SortingComponent,
    ResultsComponent,
    CardComponent,
    SettingsButtonComponent,
    BorderDirective,
    LogoComponent,
    SortDateComponent,
    SortViewComponent,
    SortInputComponent,
    WordSortPipe,
    DateSortPipe,
    ViewSortPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
