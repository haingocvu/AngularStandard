import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ExampleComponent } from '@app/components/example/example.component';
import { TopBarComponent } from '@app/components/top-bar/top-bar.component';
import { HeaderInterceptor } from 'app/http-interceptors/header-interceptor';

import { winWheelReducer } from '@app/store/reducers/win-wheel.reducer';
import { environment } from '@environments/environment';

@NgModule({
  declarations: [AppComponent, ExampleComponent, TopBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    StoreModule.forRoot({
      winWheelData: winWheelReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
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
