import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 
import { AppRoutingModule } from './app-routing.module';
// 
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
// 
import { GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
// 
import { environment } from 'src/environments/environment';
// 
import { AppComponent } from './app.component';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { HomeModule } from './_home/home.module';
import { DocumentModule } from './_document/document.module';
import { CartModule } from './_cart/cart.module';
import { AuthModule } from './_auth/auth.module';


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
    GoogleSigninButtonModule,
    DocumentModule,
    HomeModule,
    AuthModule,
    CartModule,

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.GG_CLIENT_ID,
              {
                oneTapEnabled: false
              }
            )
          }
        ],
        onError: (err: any) => {
          console.error(err);
        }
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
