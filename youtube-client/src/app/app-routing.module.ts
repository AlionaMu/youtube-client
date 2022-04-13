import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedInfoPageComponent } from './youtube/page/detailed-info-page/detailed-info-page.component';

import { MainPageComponent } from './youtube/page/main-page/main-page.component';
import { NotFoundPageComponent } from './youtube/page/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: MainPageComponent },
  { path: '**', component: NotFoundPageComponent },
  { path: 'video/:id', component: DetailedInfoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
