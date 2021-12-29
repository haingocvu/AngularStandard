import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ExampleComponent } from '@app/components/example/example.component';
import { TopBarComponent } from '@app/components/top-bar/top-bar.component';
import { HeaderInterceptor } from 'app/http-interceptors/header-interceptor';

import { winWheelReducer } from '@app/store/reducers/win-wheel.reducer';
import { environment } from '@environments/environment';
import { WinWheelEffect } from '@app/store/effects/win-wheel.effect';
import { WinWheelComponent } from './components/win-wheel/win-wheel.component';

@NgModule({
  declarations: [AppComponent, ExampleComponent, TopBarComponent, WinWheelComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    FlexLayoutModule,
    StoreModule.forRoot({
      winWheelData: winWheelReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([WinWheelEffect]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
