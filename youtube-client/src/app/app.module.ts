import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { SearchComponent } from './search/search.component';
import { SortingComponent } from './sorting/sorting.component';
import { ResultsComponent } from './results/results.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    Header,
    AuthComponent,
    SearchComponent,
    SortingComponent,
    ResultsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
