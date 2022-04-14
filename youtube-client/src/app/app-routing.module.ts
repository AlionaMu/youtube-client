import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedInfoPageComponent } from './youtube/page/detailed-info-page/detailed-info-page.component';
import { MainPageComponent } from './youtube/page/main-page/main-page.component';
import { NotFoundPageComponent } from './youtube/page/not-found-page/not-found-page.component';

import { DetailedInfoComponent } from './youtube/components/detailed-info/detailed-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: DetailedInfoPageComponent/*MainPageComponent*/ },
  { path: '**', component: NotFoundPageComponent },
  { path: 'video', component: DetailedInfoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
