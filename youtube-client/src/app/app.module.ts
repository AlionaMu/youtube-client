import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeModule } from './youtube/youtube.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './core/guards/auth.guard';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './redux/reducers/app.reducer';
import { CustomEffects } from './redux/effects/custom.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    YoutubeModule,
    CoreModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([CustomEffects]),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
