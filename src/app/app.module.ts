import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 
import { AppRoutingModule } from './app-routing.module';
// 
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
// 
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
// 
import { environment } from 'src/environments/environment';
// 
import { AppComponent } from './app.component';
import { HomeModule } from './_home/home.module';
import { DocumentModule } from './_document/document.module';
import { CartModule } from './_cart/cart.module';
import { AuthModule } from './_auth/auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyaModule } from './_mya/mya.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModalModule,
    NgbModule,
    NgxPageScrollCoreModule.forRoot({ duration: 1, }),
    SocialLoginModule,
    DocumentModule,
    HomeModule,
    AuthModule,
    CartModule,
    MyaModule
  ],
  providers: [

    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.GG_CLIENT_ID),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.CAPTCHA_KEY,
      } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
