import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/header/search/search.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { AuthComponent } from './components/header/auth/auth.component';
import { SettingsButtonComponent } from './components/header/settings-button/settings-button.component';

import { CoreRoutingModule } from './core-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    AuthComponent,
    SettingsButtonComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
