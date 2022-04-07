import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResultsComponent } from './results/results.component';
import { CardComponent } from './results/card/card.component';
import { AuthComponent } from './header/auth/auth.component';
import { SearchComponent } from './header/search/search.component';
import { SortingComponent } from './sorting/sorting.component';
import { SettingsButtonComponent } from './header/settings-button/settings-button.component';
import { BorderDirective } from './directives/border-color.directive';
import { LogoComponent } from './header/logo/logo.component';
import { SortDateComponent } from './sorting/sort-date/sort-date.component';
import { SortViewComponent } from './sorting/sort-view/sort-view.component';
import { SortInputComponent } from './sorting/sort-input/sort-input.component';
import { WordSortPipe } from './pipes/input-sort.pipe';
import { DateSortPipe } from './pipes/date-sort.pipe';


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
    DateSortPipe
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
