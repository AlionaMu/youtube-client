import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/header/search/search.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { AuthComponent } from './components/header/auth/auth.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { SettingsButtonComponent } from './components/header/settings-button/settings-button.component';

import { SortDateComponent } from '../../app/core/components/sorting/sort-date/sort-date.component';
import { SortViewComponent } from '../../app/core/components/sorting/sort-view/sort-view.component';
import { SortInputComponent } from '../../app/core/components/sorting/sort-input/sort-input.component';


@NgModule({
  declarations: [
    LogoComponent,
    SearchComponent,
    AuthComponent,
    SettingsButtonComponent,
    HeaderComponent,
    SortingComponent,
    SortDateComponent,
    SortViewComponent,
    SortInputComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    SortingComponent,
  ]
})
export class CoreModule { }
