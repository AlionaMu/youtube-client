import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './page/main-page/main-page.component';
import { DetailedInfoPageComponent } from './page/detailed-info-page/detailed-info-page.component';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminPageComponent } from './page/admin-page/admin-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';
import { ResultsComponent } from './components/results/results.component';
import { CardComponent } from './components/results/card/card.component';
import { BorderDirective } from './directives/border-color.directive';
import { WordSortPipe } from './pipes/input-sort.pipe';
import { DateSortPipe } from './pipes/date-sort.pipe';
import { ViewSortPipe } from './pipes/view-sort.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptor';


@NgModule({
  declarations: [
    MainPageComponent,
    DetailedInfoPageComponent,
    NotFoundPageComponent,
    NotFoundComponent,
    AdminComponent,
    AdminPageComponent,
    DetailedInfoComponent,
    ResultsComponent,
    CardComponent,
    BorderDirective,
    WordSortPipe,
    DateSortPipe,
    ViewSortPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ]
})
export class YoutubeModule { }
