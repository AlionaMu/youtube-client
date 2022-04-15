import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedInfoPageComponent } from './youtube/page/detailed-info-page/detailed-info-page.component';
import { MainPageComponent } from './youtube/page/main-page/main-page.component';
import { NotFoundPageComponent } from './youtube/page/not-found-page/not-found-page.component';

import { AuthGuard } from './core/guards/auth.guard';
import { AuthComponent } from './core/components/header/auth/auth.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'home', component: MainPageComponent, canActivate: [AuthGuard] },
  { path: 'video/:id', component: DetailedInfoPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
