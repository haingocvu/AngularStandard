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
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatButtonModule } from '@angular/material/button';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ExampleComponent } from '@app/components/example/example.component';
import { TopBarComponent } from '@app/components/top-bar/top-bar.component';
import { HeaderInterceptor } from 'app/http-interceptors/header-interceptor';

import { winWheelReducer } from '@app/store/reducers/win-wheel.reducer';
import { environment } from '@environments/environment';
import { WinWheelEffect } from '@app/store/effects/win-wheel.effect';
import { WinWheelComponent } from './components/win-wheel/win-wheel.component';
import { SpinEffect } from '@app/store/effects/spin.effect';
import { spinReducer } from '@app/store/reducers/spin.reducer';
import { customerInfoReducer } from '@app/store/reducers/customerInfo.reducer';
import { CustomerInfoEffect } from '@app/store/effects/customerInfo.effect';
import { FooterComponent } from '@app/components/footer/footer.component';
import { SignInComponent } from '@app/components/sign-in/sign-in.component';
import { RulesComponent } from '@app/components/rules/rules.component';

import { SafeHtmlPipe } from '@app/pipes/safe-html.pipe';
import { RewardAlertComponent } from '@app/components/reward-alert/reward-alert.component';
import { GiftBoxComponent } from '@app/components/gift-box/gift-box.component';

import { combineReducer } from '@app/store/reducers/combine.reducer';
import { HomeComponent } from '@app/pages/home/home.component';
import { ListCustomerComponent } from '@app/pages/list-customer/list-customer.component';
import { customerRewardReducer } from '@app/store/reducers/customer-reward.reducer';
import { CustomerRewardEffect } from '@app/store/effects/customer-reward.effect';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    TopBarComponent,
    WinWheelComponent,
    FooterComponent,
    SignInComponent,
    RulesComponent,
    SafeHtmlPipe,
    RewardAlertComponent,
    GiftBoxComponent,
    HomeComponent,
    ListCustomerComponent,
  ],
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
      spinData: spinReducer,
      customerInfoData: customerInfoReducer,
      combineData: combineReducer,
      customerRewardData: customerRewardReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([
      WinWheelEffect,
      SpinEffect,
      CustomerInfoEffect,
      CustomerRewardEffect,
    ]),
    NgxSpinnerModule,
    MatButtonModule,
    NgScrollbarModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
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
