import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { ResultsComponent } from './results/results.component';
import { AuthComponent } from './header/auth/auth.component';
import { SearchComponent } from './header/search/search.component';
import { SortingComponent } from './header/sorting/sorting.component';


@NgModule({
  declarations: [
    AppComponent,
    Header,
    AuthComponent,
    SearchComponent,
    SortingComponent, 
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
