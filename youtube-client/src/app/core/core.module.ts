import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/header/search/search.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { AuthComponent } from './components/header/auth/auth.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { SettingsButtonComponent } from './components/header/settings-button/settings-button.component';
import { SortInputComponent } from '../../app/core/components/sorting/sort-input/sort-input.component';


@NgModule({
  declarations: [
    LogoComponent,
    SearchComponent,
    AuthComponent,
    SettingsButtonComponent,
    HeaderComponent,
    SortingComponent,
    SortInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SortingComponent,
  ]
})
export class CoreModule { }
